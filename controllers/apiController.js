 index = (req, res) => {
    res.json({
      message: 'Welcome to HomeBoard!',
      documentation_url: 'https://github.com/teripanda/homeboard/tree/biniam-dev',
      base_url: 'localhost:3000',
      endpoints: [
        {
          method: 'GET', path: '/api', description: 'this is the api, shows list of all the apis'   
        },
        {
          method: 'GET', path: '/api', description: 'this is the api, shows list of all the apis'   
        }
      ]
    });
  }
  
  module.exports = {
    index: index
  }