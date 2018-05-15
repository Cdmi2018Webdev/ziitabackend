module.exports = {
  permissionsArray : [
    {Permission: 'manageProject', default_client: true, default_pm: true, default_dev: false,
    roads: []},
    {Permission: 'manageTeam', default_client: true, default_pm: true, default_dev: false,
    roads: ['/Team/:Id']},
    {Permission: 'manageModules', default_client: true, default_pm: true, default_dev: false,
  roads:[]},
    {Permission: 'manageWallet', default_client: true, default_pm: false, default_dev: false,
  roads:[]},
    {Permission: 'manageCategory', default_client: true, default_pm: true, default_dev: false,
  roads:[]},
    // configuration management permission
    {Permission: 'manageConfiguration', default_client: true, default_pm: true, default_dev: false,
    roads: ['']},
    // permission management permissions
    {Permission: 'managePermission', default_client: true, default_pm: false, default_dev: false,
    roads: ['/administrator/permission/:Id','/administrator/setPermission']},
    {Permission: 'manageEa', default_client: true, default_pm: false, default_dev: false,
    roads: []},
    {Permission: 'manageQa', default_client: false, default_pm: false, default_dev: false, roads: []},
      {Permission: 'manageProjectManager', default_client: false, default_pm: false, default_dev: false,
    roads: []},
    // file management permissions
    {Permission: 'manageFiles', default_client: true, default_pm: true, default_dev: true,
    roads: ['/fileUpload/','/shareFile/:user/:file','/deleteFiles/:user/:file','/received/:user/:team','/files/:user/:team']},
  ],
}
