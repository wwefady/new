/**
 * Control your APM / Pixhawk quadcopter with your voice, using Amazon Alexa, Lambda, 2lemetry MQTT.
 */

var awsIot = require('aws-iot-device-sdk');
var config = require("./config");

var deviceName = "SmartTvControl";        // this device is really the controller

var mqtt_config = {
    "keyPath": config.privateKey,
    "certPath": config.certificate,
    "caPath": config.rootCA,
    "host": config.host,
    "port": 8883,
    "clientId": "Lambda-" + deviceName,  //+ "-Lambda-" + (new Date().getTime()),
    "region":"us-east-1",
    "debug":true
};

var ctx = null;
var client = null;

// Route the incoming request based on type (LaunchRequest, IntentRequest, etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);
        ctx = context;

        if (event.session.application.applicationId !== app_id) {
             ctx.fail("Invalid Application ID");
         }

        client = awsIot.device(mqtt_config);

        client.on("connect",function(){
            console.log("Connected to AWS IoT");
//            callback();
        });


        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request, event.session);
        }  else if (event.request.type === "IntentRequest") {
            onIntent(event.request, event.session);
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            ctx.succeed();
        }
    } catch (e) {
        console.log("EXCEPTION in handler:  " + e);
        ctx.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId + ", sessionId=" + session.sessionId);
}


/**
 * Called when the user launches the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId + ", sessionId=" + session.sessionId);

    // Dispatch to your skill's launch.
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session ) {                  //, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
    intentName = intentRequest.intent.name;

    console.log("REQUEST to string =" + JSON.stringify(intentRequest));

    var callback = null;
    // Dispatch to your skill's intent handlers
    if ("GoIntent" === intentName) {
        doGoIntent(intent, session);
    } else if ("CommandIntent" === intentName) {
        doCommandIntent(intent, session);
    } else if ("TurnIntent" === intentName) {
        doTurnIntent(intent, session);
    } else if ("HelpIntent" === intentName) {
        getWelcomeResponse();
    } else {
        throw "Invalid intent";
    }

}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId + ", sessionId=" + session.sessionId);
    // Add cleanup logic here
}

// --------------- Functions that control the skill's behavior -----------------------

function getWelcomeResponse() {
    // If we wanted to initialize the session to have some attributes we could add those here.
    var sessionAttributes = {};
    var cardTitle = "Welcome";
    var speechOutput = "Welcome to the DRONE CONTROL . ";

    // TODO:  is drone online or offline?  If online, is it ARMED?

    var repromptText = "Drone ready for command.";
    var shouldEndSession = false;

    ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));

}

/**
 *  handles GO intent.
 */
function doGoIntent(intent, session, callback) {
//    var cardTitle = "Drone GO...";
    var repromptText = "";
    var sessionAttributes = {};
    var shouldEndSession = false;
    var speechOutput = "";

    var direction = intent.slots.Direction.value;
    var distance = intent.slots.Distance.value;
    var unit = intent.slots.Unit.value;

    var validDirections = ["forward", "forwards", "backwards", "back", "right", "left", "up", "down", "straight", "ahead", "straight ahead"];
    var validUnits = [ "foot", "feet", "meter", "meters", "yard", "yards" ];

    repromptText = "Tell me how far to go and in what direction.  ";
    var fail = false;

    // validate inputs
    if ( !( parseInt(distance) >= 1 )  )
    {
        speechOutput = "I couldn't understand the distance you want me to travel. ";
        fail = true;
        ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
    }
    if (validDirections.indexOf(direction) == -1)
    {
        speechOutput = "I couldn't understand the direction you want me to travel.  ";
        fail = true;
        ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
    }
    if (validUnits.indexOf(unit) == -1)
    {
        speechOutput = "I couldn't understand the unit you want me to travel.  ";
        fail = true;
        ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
    }

    if (!fail)
    {
        var cardTitle = "Drone going " + direction + " " + distance + " " + unit;
        speechOutput = "Going " + direction + " " + distance + " " + unit;
        mqttPublish(intent, sessionAttributes, cardTitle, speechOutput, repromptText, shouldEndSession);
    }
}


function doCommandIntent(intent, session, callback) {
//    var cardTitle = "Drone COMMAND..." ;
    var repromptText = null;
    var sessionAttributes = {};
    var shouldEndSession = false;
    var speechOutput = "";

    repromptText = "Tell me what is the command for the drone.  ";

    var task = intent.slots.Task.value;
    var validTasks = [ "launch", "land", "r. t. l.", "hold", "stay", "stop", "return to launch", "abort" ];

    if (validTasks.indexOf(task) == -1)
    {
        speechOutput = "I couldn't understand the command.  ";
        ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
    }
    else
    {
        var cardTitle = "Executing Drone command " + task ;
        speechOutput = "Executing command " + task;
        mqttPublish(intent, sessionAttributes, cardTitle, speechOutput, repromptText, shouldEndSession);
    }
}


function doTurnIntent(intent, session, callback) {
//    var cardTitle = "Drone Turn..." ;
    var repromptText = null;
    var sessionAttributes = {};
    var shouldEndSession = false;
    var speechOutput = "";

    repromptText = "Tell me how you want to turn the drone.  ";

    var direction = intent.slots.Direction.value;
    var validDirections = [ "right", "left", "around" ];

    if (validDirections.indexOf(direction) == -1)
    {
        speechOutput = "I couldn't understand the direction of the turn. ";
        ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
    }
    else
    {
        var cardTitle = "Drone turning " + direction;
        speechOutput = "Turning " + direction;
        mqttPublish(intent, sessionAttributes, cardTitle, speechOutput, repromptText, shouldEndSession);
    }
}



function mqttPublish(intent, sessionAttributes, cardTitle, speechOutput, repromptText, shouldEndSession)
{
    var strIntent = JSON.stringify(intent);
    console.log("mqttPublish:  INTENT text = " + strIntent);
//    client.publish("ikw1zr46p50f81z/drone/echo", strIntent, false);
    client.publish(config.topic, strIntent, false);
    client.end();

    client.on("close", (function () {
        console.log("MQTT CLIENT CLOSE - thinks it's done, successfully. ");
        ctx.succeed(buildResponse(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)));
    }));

    client.on("error", (function (err, granted) {
        console.log("MQTT CLIENT ERROR!!  " + err);
    }));
}


// --------------- Helpers that build all of the responses -----------------------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    }
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    }
}
