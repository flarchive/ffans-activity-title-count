import app from 'flarum/forum/app';
import extendApplication from './extend/Application';
import extendUser from './extend/User';

app.initializers.add('ffans-activity-title-count', () => {
  extendApplication();
  extendUser();
});
