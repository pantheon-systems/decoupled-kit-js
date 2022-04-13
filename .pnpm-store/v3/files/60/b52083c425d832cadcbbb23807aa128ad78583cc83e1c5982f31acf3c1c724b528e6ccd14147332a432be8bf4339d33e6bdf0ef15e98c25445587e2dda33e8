"use strict";

exports.__esModule = true;
exports.menuBeforeChangeNode = void 0;

var _getGatsbyApi = require("../../../utils/get-gatsby-api");

const deleteMenuNodeChildMenuItems = node => {
  const {
    pluginOptions,
    helpers: {
      getNodesByType,
      actions
    }
  } = (0, _getGatsbyApi.getGatsbyApi)();
  const allMenuItems = getNodesByType(`${pluginOptions.schema.typePrefix}MenuItem`);
  const allMenuItemsNodesWithThisMenuIdAsAParent = allMenuItems.filter(menuItemNode => menuItemNode.menu.node.id === node.id);

  for (const menuItemNode of allMenuItemsNodesWithThisMenuIdAsAParent) {
    actions.deleteNode(menuItemNode);
  }
};

const menuBeforeChangeNode = async api => {
  if (api.remoteNode && api.actionType === `DELETE`) {
    // delete child menu items
    return deleteMenuNodeChildMenuItems(api.remoteNode);
  }

  return null;
};

exports.menuBeforeChangeNode = menuBeforeChangeNode;
//# sourceMappingURL=menu.js.map