module.exports = {
  mongodb: {
    server: 'localhost',
    port: 27017,

    //autoReconnect: automatically reconnect if connection is lost
    autoReconnect: true,
    //poolSize: size of connection pool (number of connections to use)
    poolSize: 4,

    // >>>>  If you are using regular accounts, fill out auth details in the section below
    // >>>>  If you have admin auth, leave this section empty and skip to the next section

    auth: [
      /*
       * Add the the name of the database, the username and the password like below
       * Add as many databases as you want
       * Username and password are optional if no user accounts exist for that database
      {
        database: 'test',
        username: 'user',
        password: 'pass'
      }
      */
      {
        database: 'test',
        username: 'user',
        password: 'pass'
      },
      {
        database: 'foo',
        username: 'test',
        password: ''
      }
    ],

    //  >>>>  If you are using an admin mongodb account, or no admin account exists, fill out section below
    //  >>>>  Using an admin account allows you to view and edit all databases, and view stats

    //set admin to true if you want to turn on admin features
    admin: false,
    //leave username and password empty if no admin account exists
    adminUsername: '',
    adminPassword: '',
    //whitelist: hide all databases except the ones in this list  (empty list for no whitelist)
    whitelist: [],
    //blacklist: hide databases listed in the blacklist (empty list for no blacklist)
    blacklist: []
  },
  site: {
    //baseUrl: the URL that mongo express will be located at
    //Remember to add the trailing forward slash at the end!
    baseUrl: 'http://localhost:8081/',
    port: 8081
  },
  options: {
    //editorTheme: Name of the theme you want to use for displaying documents
    //See http://codemirror.net/demo/theme.html for all examples
    editorTheme: "rubyblue",

    //The options below aren't being used yet

    //cmdType: the type of command line you want mongo express to run
    //values: eval, subprocess
    //  eval - uses db.eval. commands block, so only use this if you have to
    //  subprocess - spawns a mongo command line as a subprocess and pipes output to mongo express
    cmdType: 'eval',
    //subprocessTimeout: number of seconds of non-interaction before a subprocess is shut down
    subprocessTimeout: 300
  }
};
