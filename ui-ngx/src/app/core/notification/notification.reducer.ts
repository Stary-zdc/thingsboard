///
/// Copyright © 2016-2019 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { NotificationState } from './notification.models';
import { NotificationActions, NotificationActionTypes } from './notification.actions';

export const initialState: NotificationState = {
  notification: null
};

export function notificationReducer(
  state: NotificationState = initialState,
  action: NotificationActions
): NotificationState {
  switch (action.type) {
    case NotificationActionTypes.SHOW_NOTIFICATION:
      return { ...state, notification: action.notification };
    default:
      return state;
  }
}