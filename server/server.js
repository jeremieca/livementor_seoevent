var
	express = require('express'),
	app = express(),
	errorHandler = require('express-error-handler'),
	errorHandlerFunction = errorHandler.httpError(404),
	staticFolder = (process.argv[2] === 'prod') ? '../app/build/prod' : '../app/build/dev',
	handler = errorHandler({
		static: {
			'404': staticFolder + '/index.html'
		}
	});

app.use(express.static(staticFolder));
app.use(handle404);
app.use(handler);

function handle404 (req, res, next) {

	if((/^\/api*/).test(req.originalUrl))     	 { return res.sendStatus(404); }
	if((/^\/assets*/).test(req.originalUrl))   	 { return res.sendStatus(404); }

	return errorHandlerFunction(req, res, next);

}

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});