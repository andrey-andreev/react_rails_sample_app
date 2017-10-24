

## Prerequisites
Install <a href="https://yarnpkg.com/lang/en/docs/install/" target="_blank">yarn</a> 
```
brew install yarn
```

# Setup on existing rails project

## Add <a href="https://github.com/rails/webpacker" target="_blank">webpacker</a> and <a href="https://github.com/reactjs/react-rails" target="_blank">react-rails</a> gems into project gemfile
```
gem 'webpacker', '~> 3.0'
gem 'react-rails'
```

## Install <a href="https://github.com/rails/webpacker" target="_blank">webpacker</a> and <a href="https://github.com/reactjs/react-rails" target="_blank">react-rails</a> to the project
Navigate to the project folder in terminal and run these commands
```
rails webpacker:install
rails webpacker:install:react
rails generate react:install
```
Delete <project_dir>/app/javascript/packs/hello_react.jsx is just an example component


## Sample react component
Create your component in <project_dir>/app/javascript/components or just run in terminal (https://github.com/reactjs/react-rails#component-generator):
```
rails g react:component post title body --es6
```

## Create sample controller
```
rails generate controller welcome index
```
Add the following tags into <project_dir>/app/views/layouts/welcome/index.html.erb
```
<%= javascript_pack_tag 'application' %>
<%= react_component 'Post', { title: 'A working react component', body: 'Simple but effective' }, prerender: true %>
```

Now run `rails s` and navigate to <a href="http://localhost:3000/welcome/index" target="_blank">http://localhost:3000/welcome/index</a>  and you have to see your component.




