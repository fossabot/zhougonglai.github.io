const ghpages = require('gh-pages');

ghpages.publish('dist', 
{
  branch: 'master',
  repo: 'https://github.com/zhougonglai/zhougonglai.github.io.git',
  message: 'Auto-generated commit'
}, (err) =>{
  console.log(err)
});