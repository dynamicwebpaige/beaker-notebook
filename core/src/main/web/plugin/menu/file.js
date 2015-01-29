/*
 *  Copyright 2014 TWO SIGMA OPEN SOURCE, LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * 'File' menu plugin
 * This plugs in the 'File' menu that is the container of menu items like New, Open, Save,
 * Close for notebooks
 */
define(function(require, exports, module) {
  'use strict';
  var fileMenuItems = [
    {
      name: "New Notebook",
      sortorder: 100,
      action: function() {
        bkHelper.newSession(true);
      },
      tooltip: "Open a new empty notebook, add the languages of your choice"
    },
    {
      name: "Open",
      sortorder: 110
    },
    {
      name: "Open recent",
      sortorder: 120,
      items: function() {
        return bkHelper.getRecentMenuItems();
      }
    },
    {
      name: "Import",
      sortorder: 125,
      action: bkHelper.importNotebookDialog
    },
    {
      name: "Save",
      sortorder: 130,
      action: function() {
        bkHelper.saveNotebook();
      }
    },
    {
      name: "Save As",
      sortorder: 140,
      autoReduce: true,
      items: []
    },
    {
      name: "Share to Web",
      sortorder: 150,
      action: function () {
        bkHelper.shareNotebook();
      },
      tooltip: "Share the notebook to a public web page using an anonymous github gist"
    },
    {
      name: "Close",
      sortorder: 160,
      action: function() {
        bkHelper.closeNotebook();
      }
    }
  ];

  var menuItemPromise = bkHelper.newPromise({
    parent: "File",
    items: fileMenuItems
  });

  exports.getMenuItems = function() {
    return menuItemPromise;
  };
});
