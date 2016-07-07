var config = {};

config.host = "a4hxjcrdpeqvc.iot.us-east-1.amazonaws.com";
config.topic = "$aws/things/SmartTvControl/shadow/update";
config.app_id = "amzn1.echo-sdk-ams.app.a6702c59-e3f4-4bd1-8f32-14573d9a2d04"

config.privateKey = new Buffer("-----BEGIN RSA PRIVATE KEY-----"+
"MIIEpQIBAAKCAQEA5DxmlhyUE3ZE1rP4YmmWQN3V+nFY4kHgNw96QddDXL2RqWml"+
"eD3g1rpWgMuaH3+2vy7c2fKzQMoAn21+bHvsDvIPpE1UQG9n4R4f3qknX/9VoKuJ"+
"x0WJAj/SwL2sNy6unBeI5dz9aDUVO8tewTpJb5JbdHOdOiQxK1DPcqUPKqWt7jk7"+
"hvEyfCMLPcTqfDjruZNGVq5qs1ZrA6ZgHKrVU0LWsK9kCAPtVXJFqM2RPBIut9aj"+
"gIs6Smq3QP9PkObBfio7/Xa32GO2Qja+ZNXUrrwGfUPwGo0Y4lzRPA624QxAdCCi"+
"2OS4wSV7rajLka2qeVnb9aU491lI38wTQlUVyQIDAQABAoIBAGOchP2BDZOM67B1"+
"LbPt91jqOOisLanaLHx7cdVomQrR5c/1vvVCtG2jN/vQYLzcpaq9TkCFL3zYbPsn"+
"86RvVXCUbwU7hsj0lnbnCevJEdlQ/FM6atCg5ZIovtfGMHKJGkYf82y3TZX8jP7i"+
"3MEiqkharTWe/AETKK6J/3A+3+axQ736tLYVdgyBneR9ly4Cu8JgZhunPNVCmTUh"+
"gFcP3Hg9CTPnJJXUI5oYsuM4mg7pYgMoN8eX+1lxrjmD5CAajsGpwBsTvbag/QQZ"+
"3cz/rwfdxbCLZgzHWmdlt3AhBEsIXDak0rP/sU7tNcisQUtac/l4QcTGTVA4tdRx"+
"sT9PQoECgYEA8+iE+sf8N1s3SbPeRpAYyIJ8sxq3brYQ23kBDEC2la3rY3XY4k2v"+
"AZUWP4+VViPKyh7CZwn3CFRfh5+CqJZRwZkwu5EyXwu4dAukyeXlx7azhZYe2MMi"+
"7nUr5PQ1HAfncr1X2TMHhcJd2rtVybLhFRzfnpcfshrLMWFKCZRDNLkCgYEA74z7"+
"I/tuajVtudcy3xF5obujTWVkSaUeQ/ptJL2jZcN0RkPY+0eRIiXnnCFC7Hj0Oq4F"+
"LsMj6Fe3SmqvMl4ug1xR3j+beBg/EqkR6B56X9VBPgQSI3MKQ39+NWnUWziwdXmO"+
"aXZxXZMGWD7yH2Z1TtgRR5cILgJVT9Mk/HzLgZECgYEAnR5Ws1mqPlqTFfY5JElk"+
"vZ1ZCOMX8Mh1uXuMUkFJnMgJTuu2R6l1J9bLGyy6LWAnHOaNomSH7qSzWSFGwKT8"+
"i3LMMreItDNPoelyQODIkUs+/7nBqy6gzO1L1lP99k2dKYuREIhPuzmGzgVJcQG6"+
"/qe34WhGcavS4r9iOyN323kCgYEAz7ijaZ80Lprn6/eEoFPp8enggFOEdCvfI7k6"+
"/VoIH00uPWPF+pcjbcYKoaNiAeYceem+ir8iGu48/SWnh/iNQtFCGIN1j90OjGLZ"+
"KTuMiB9G9LzY8a5m3wLl8PE0+Gke8q8WY7MWOLsuDEWA9OOGo3jO+xInQKY7Tf3c"+
"m6inW1ECgYEA5KGf71JJV97J1PPolnWA2dHfjjMLllk0V9Ie7qMNSqfKqBikG7on"+
"FpDpMT5AyAL1YIseWRX9UKpmtUNAVukFwdlHkDJiNNokCpNGX5wy71TxallGx//C"+
"pDlt5Kkgm5tZgLuNmyOhB4dAqqlzYdeuDYBKz+OfkwhzK54zec+IiTI="+
"-----END RSA PRIVATE KEY-----"+
");

config.certificate = new Buffer("-----BEGIN CERTIFICATE-----"+
"MIIDWTCCAkGgAwIBAgIUE4IMetgkb+2FRpKzJKZcQFhNlIcwDQYJKoZIhvcNAQEL"+
"BQAwTTFLMEkGA1UECwxCQW1hem9uIFdlYiBTZXJ2aWNlcyBPPUFtYXpvbi5jb20g"+
"SW5jLiBMPVNlYXR0bGUgU1Q9V2FzaGluZ3RvbiBDPVVTMB4XDTE2MDYyMzIxNDk0"+
"MVoXDTQ5MTIzMTIzNTk1OVowHjEcMBoGA1UEAwwTQVdTIElvVCBDZXJ0aWZpY2F0"+
"ZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOQ8ZpYclBN2RNaz+GJp"+
"lkDd1fpxWOJB4DcPekHXQ1y9kalppXg94Na6VoDLmh9/tr8u3Nnys0DKAJ9tfmx7"+
"7A7yD6RNVEBvZ+EeH96pJ1//VaCricdFiQI/0sC9rDcurpwXiOXc/Wg1FTvLXsE6"+
"SW+SW3RznTokMStQz3KlDyqlre45O4bxMnwjCz3E6nw467mTRlauarNWawOmYByq"+
"1VNC1rCvZAgD7VVyRajNkTwSLrfWo4CLOkpqt0D/T5DmwX4qO/12t9hjtkI2vmTV"+
"1K68Bn1D8BqNGOJc0TwOtuEMQHQgotjkuMEle62oy5GtqnlZ2/WlOPdZSN/ME0JV"+
"FckCAwEAAaNgMF4wHwYDVR0jBBgwFoAU6c8+3ECnlEAcBh8LileNPUIKahIwHQYD"+
"VR0OBBYEFI6UEsx8OsEk0dRYoI58ez3/+nnAMAwGA1UdEwEB/wQCMAAwDgYDVR0P"+
"AQH/BAQDAgeAMA0GCSqGSIb3DQEBCwUAA4IBAQCxO9SH0fKVXzWHsmSJs/5PxDAC"+
"AMuErd4AMrCqBa0M62bRm0X8JLH7ssrF/RazE0XNPky7822MeFD9HtLIuMzxH6rG"+
"yFQt71pOnV3Uz7+Z2txkkOJvZAYLTWkU/14qoo6v46wpg0SvVW3/5if55dZXCl7B"+
"G7/8dI3cjeXU0AGpw0+PSOtyxWEI5nUnOeig0pphtDyWZjlaa+i+8T4MPlgNEYU6"+
"R8xHKf99c+RKqjOXJdcosWCBXtIqD7mVnzomcclH3gf/jHuIuIg0ABzYNLixG3zW"+
"nKeTduejmUP3Ff1N3scQIdO3Qigmv5CoWujKSWgubdn/S5QFoU0sWdg8vrbz"+
"-----END CERTIFICATE-----"+
");


/**
 * Standard rootCA for everyone to use
 */
config.rootCA = new Buffer("-----BEGIN CERTIFICATE-----\n"+
"MIIE0zCCA7ugAwIBAgIQGNrRniZ96LtKIVjNzGs7SjANBgkqhkiG9w0BAQUFADCB\n"+
"yjELMAkGA1UEBhMCVVMxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMuMR8wHQYDVQQL\n"+
"ExZWZXJpU2lnbiBUcnVzdCBOZXR3b3JrMTowOAYDVQQLEzEoYykgMjAwNiBWZXJp\n"+
"U2lnbiwgSW5jLiAtIEZvciBhdXRob3JpemVkIHVzZSBvbmx5MUUwQwYDVQQDEzxW\n"+
"ZXJpU2lnbiBDbGFzcyAzIFB1YmxpYyBQcmltYXJ5IENlcnRpZmljYXRpb24gQXV0\n"+
"aG9yaXR5IC0gRzUwHhcNMDYxMTA4MDAwMDAwWhcNMzYwNzE2MjM1OTU5WjCByjEL\n"+
"MAkGA1UEBhMCVVMxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMuMR8wHQYDVQQLExZW\n"+
"ZXJpU2lnbiBUcnVzdCBOZXR3b3JrMTowOAYDVQQLEzEoYykgMjAwNiBWZXJpU2ln\n"+
"biwgSW5jLiAtIEZvciBhdXRob3JpemVkIHVzZSBvbmx5MUUwQwYDVQQDEzxWZXJp\n"+
"U2lnbiBDbGFzcyAzIFB1YmxpYyBQcmltYXJ5IENlcnRpZmljYXRpb24gQXV0aG9y\n"+
"aXR5IC0gRzUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCvJAgIKXo1\n"+
"nmAMqudLO07cfLw8RRy7K+D+KQL5VwijZIUVJ/XxrcgxiV0i6CqqpkKzj/i5Vbex\n"+
"t0uz/o9+B1fs70PbZmIVYc9gDaTY3vjgw2IIPVQT60nKWVSFJuUrjxuf6/WhkcIz\n"+
"SdhDY2pSS9KP6HBRTdGJaXvHcPaz3BJ023tdS1bTlr8Vd6Gw9KIl8q8ckmcY5fQG\n"+
"BO+QueQA5N06tRn/Arr0PO7gi+s3i+z016zy9vA9r911kTMZHRxAy3QkGSGT2RT+\n"+
"rCpSx4/VBEnkjWNHiDxpg8v+R70rfk/Fla4OndTRQ8Bnc+MUCH7lP59zuDMKz10/\n"+
"NIeWiu5T6CUVAgMBAAGjgbIwga8wDwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8E\n"+
"BAMCAQYwbQYIKwYBBQUHAQwEYTBfoV2gWzBZMFcwVRYJaW1hZ2UvZ2lmMCEwHzAH\n"+
"BgUrDgMCGgQUj+XTGoasjY5rw8+AatRIGCx7GS4wJRYjaHR0cDovL2xvZ28udmVy\n"+
"aXNpZ24uY29tL3ZzbG9nby5naWYwHQYDVR0OBBYEFH/TZafC3ey78DAJ80M5+gKv\n"+
"MzEzMA0GCSqGSIb3DQEBBQUAA4IBAQCTJEowX2LP2BqYLz3q3JktvXf2pXkiOOzE\n"+
"p6B4Eq1iDkVwZMXnl2YtmAl+X6/WzChl8gGqCBpH3vn5fJJaCGkgDdk+bW48DW7Y\n"+
"5gaRQBi5+MHt39tBquCWIMnNZBU4gcmU7qKEKQsTb47bDN0lAtukixlE0kF6BWlK\n"+
"WE9gyn6CagsCqiUXObXbf+eEZSqVir2G3l6BFoMtEMze/aiCKm0oHw0LxOXnGiYZ\n"+
"4fQRbxC1lfznQgUy286dUV4otp6F01vvpX1FQHKOtw5rDgb7MzVIcbidJ4vEZV8N\n"+
"hnacRHr2lVz2XTIIM6RUthg/aFzyQkqFOFSDX9HoLPKsEdao7WNq\n"+
"-----END CERTIFICATE-----");



module.exports = config;
