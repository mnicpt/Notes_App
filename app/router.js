import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('notes');
  this.route('notes-folder', { path: '/notes/:folder_id' });
  this.route('note', { path: '/notes/:note_id' });
});

export default Router;
