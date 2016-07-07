#! /bin/bash

ROLE="arn:aws:iam::024794826979:role/lambda_basic_execution"	# :function:DroneControl
HANDLER="index.handler"

MEMORY=128
TIMEOUT=10

#rm -rf node_modules/
#npm install

FUNCTION=`basename \`pwd\``
PACKAGE="$FUNCTION.zip"
FILEPATH="fileb://`pwd`/${PACKAGE}"

rm -rf ${PACKAGE}
#zip -r ${PACKAGE} *.js node_modules @ --exclude=*aws-sdk*
write-zip -r ${PACKAGE} *.js node_modules awsCerts @

#aws lambda delete-function --function-name "$FUNCTION"

# aws lambda create-function \
#        --function-name "$FUNCTION" \
#        --zip-file "${FILEPATH}" \
#        --role "$ROLE" \
#        --handler "${HANDLER}" \
# 		--region us-east-1 \
#        --runtime nodejs \
#		--timeout 10

 aws lambda update-function-code    --function-name "$FUNCTION"    --zip-file "${FILEPATH}"
 
