import './index.html';
import './style.scss';

import {bootstrap} from 'angular';
import app from './app.module.js';

bootstrap(document, [app], {strictDi: true});
