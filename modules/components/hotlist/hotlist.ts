/// <reference path="../../lib/dashboard.d.ts" />
import {Component, View} from 'angular2/angular2';
import {Github} from '../../lib/github';

@Component({selector : 'hotlist', appInjector : [ Github ]})
@View({templateUrl : 'components/hotlist/hotlist.html'})
export class Hotlist {
  constructor(private _github: Github) {}
}
