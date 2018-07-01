module.exports = client => {
    
  function load (name) {
    const cmd = require(`./${name}`);
    cmd(client);
  }
  
  load('link');
  load('unlink');
};
