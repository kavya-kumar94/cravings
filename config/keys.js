<<<<<<< HEAD
module.exports = {
    mongoURI: "mongodb+srv://admin:QuIwYeYOO4s7BExg@merncluster-5j2iu.mongodb.net/test?retryWrites=true&w=majority",
    secretOrKey: "kdjfaere0we7yr0er9wepr0887te",
    YelpApiKey: "nYHIXBZJ5v8UFRI5nnG8So8pqJmDrC9ZsOy9rPjDM1ntm6EQ1mTi-bdJhxZs585BqrThjKKpHi0y2Z-6fmAx48-1SWYNUa3vWgr1JkirCLkz-3x-vYUk81fVT7orXXYx"
=======
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
>>>>>>> b35fd60f5b4c270aa92a5a3b7885a3594004a664
}