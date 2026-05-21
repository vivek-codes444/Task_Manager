const asyncWrapper = (fn) =>{                   // takes a fn
    return async (req, res, next) => {          // returns a new function in which
        try{                                    //the orignal fn is run in try block
            await fn(req, res, next)
        }
        catch(err){                             // and also catches any err from the try block and passes it
            next(err)                           // next(err) always finds a fn with 4 parameters(err, req, res, next)
        }
    }
}

module.exports = asyncWrapper