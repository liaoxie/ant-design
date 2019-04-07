(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1616:function(e,t){e.exports={content:["section",["p","Tree selection control."],["h2","When To Use"],["p",["code","TreeSelect"]," is similar to ",["code","Select"],", but the values are provided in a tree like structure.\nAny data whose entries are defined in a hierarchical manner is fit to use this control. Examples of such case may include a corporate hierarchy, a directory structure, and so on."]],meta:{category:"Components",type:"Data Entry",title:"TreeSelect",filename:"components/tree-select/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Tree props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","allowClear"],["td","Whether allow clear"],["td","boolean"],["td","false"]],["tr",["td","autoClearSearchValue"],["td","auto clear search input value when multiple select is selected/deselected"],["td","boolean"],["td","true"]],["tr",["td","defaultValue"],["td","To set the initial selected treeNode(s)."],["td","string","|","string","[","]"],["td","-"]],["tr",["td","disabled"],["td","Disabled or not"],["td","boolean"],["td","false"]],["tr",["td","dropdownClassName"],["td","className of dropdown menu"],["td","string"],["td","-"]],["tr",["td","dropdownMatchSelectWidth"],["td","Determine whether the dropdown menu and the select input are the same width. Default set ",["code","min-width"]," same as input."],["td","boolean"],["td","true"]],["tr",["td","dropdownStyle"],["td","To set the style of the dropdown menu"],["td","object"],["td","-"]],["tr",["td","filterTreeNode"],["td","Whether to filter treeNodes by input value. The value of ",["code","treeNodeFilterProp"]," is used for filtering by default."],["td","boolean","|","Function(inputValue: string, treeNode: TreeNode) (should return boolean)"],["td","Function"]],["tr",["td","getPopupContainer"],["td","To set the container of the dropdown menu. The default is to create a ",["code","div"]," element in ",["code","body"],", you can reset it to the scrolling area and make a relative reposition. ",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"example"]],["td","Function(triggerNode)"],["td","() => document.body"]],["tr",["td","labelInValue"],["td","whether to embed label in value, turn the format of value from ",["code","string"]," to ",["code","{value: string, label: ReactNode, halfChecked: string[]}"]],["td","boolean"],["td","false"]],["tr",["td","loadData"],["td","Load data asynchronously."],["td","function(node)"],["td","-"]],["tr",["td","maxTagCount"],["td","Max tag count to show"],["td","number"],["td","-"]],["tr",["td","maxTagPlaceholder"],["td","Placeholder for not showing tags"],["td","ReactNode/function(omittedValues)"],["td","-"]],["tr",["td","multiple"],["td","Support multiple or not, will be ",["code","true"]," when enable ",["code","treeCheckable"],"."],["td","boolean"],["td","false"]],["tr",["td","placeholder"],["td","Placeholder of the select input"],["td","string"],["td","-"]],["tr",["td","searchPlaceholder"],["td","Placeholder of the search input"],["td","string"],["td","-"]],["tr",["td","searchValue"],["td","work with ",["code","onSearch"]," to make search value controlled."],["td","string"],["td","-"]],["tr",["td","treeIcon"],["td","Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to ",["code","true"]],["td","boolean"],["td","false"]],["tr",["td","showCheckedStrategy"],["td","The way show selected item in box. ",["strong","Default:"]," just show child nodes. ",["strong",["code","TreeSelect.SHOW_ALL"],":"]," show all checked treeNodes (include parent treeNode). ",["strong",["code","TreeSelect.SHOW_PARENT"],":"]," show checked treeNodes (just show parent treeNode)."],["td","enum { TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }"],["td","TreeSelect.SHOW_CHILD"]],["tr",["td","showSearch"],["td","Whether to display a search input in the dropdown menu(valid only in the single mode)"],["td","boolean"],["td","false"]],["tr",["td","size"],["td","To set the size of the select input, options: ",["code","large"]," ",["code","small"]],["td","string"],["td","'default'"]],["tr",["td","suffixIcon"],["td","The custom suffix icon"],["td","ReactNode"],["td","-"]],["tr",["td","treeCheckable"],["td","Whether to show checkbox on the treeNodes"],["td","boolean"],["td","false"]],["tr",["td","treeCheckStrictly"],["td","Whether to check nodes precisely (in the ",["code","checkable"]," mode), means parent and child nodes are not associated, and it will make ",["code","labelInValue"]," be true"],["td","boolean"],["td","false"]],["tr",["td","treeData"],["td","Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value)"],["td","array\\<{ value, title, children, ","[","disabled, disableCheckbox, selectable] }>"],["td","[","]"]],["tr",["td","treeDataSimpleMode"],["td","Enable simple mode of treeData. Changes the ",["code","treeData"]," schema to: ","[","{id:1, pId:0, value:'1', title:\"test1\",...},...] where pId is parent node's id). It is possible to replace the default ",["code","id"]," and ",["code","pId"]," keys by providing object to ",["code","treeDataSimpleMode"]],["td","false","|","object\\<{ id: string, pId: string, rootPId: string }>"],["td","false"]],["tr",["td","treeDefaultExpandAll"],["td","Whether to expand all treeNodes by default"],["td","boolean"],["td","false"]],["tr",["td","treeDefaultExpandedKeys"],["td","Default expanded treeNodes"],["td","string","[","]"],["td","-"]],["tr",["td","treeExpandedKeys"],["td","Set expanded keys"],["td","string","[","]"],["td","-"]],["tr",["td","treeNodeFilterProp"],["td","Will be used for filtering if ",["code","filterTreeNode"]," returns true"],["td","string"],["td","'value'"]],["tr",["td","treeNodeLabelProp"],["td","Will render as content of select"],["td","string"],["td","'title'"]],["tr",["td","value"],["td","To set the current selected treeNode(s)."],["td","string","|","string","[","]"],["td","-"]],["tr",["td","onChange"],["td","A callback function, can be executed when selected treeNodes or input value change"],["td","function(value, label, extra)"],["td","-"]],["tr",["td","onSearch"],["td","A callback function, can be executed when the search input changes."],["td","function(value: string)"],["td","-"]],["tr",["td","onSelect"],["td","A callback function, can be executed when you select a treeNode."],["td","function(value, node, extra)"],["td","-"]],["tr",["td","onTreeExpand"],["td","A callback function, can be executed when treeNode expanded"],["td","function(expandedKeys)"],["td","-"]]]],["h3","Tree Methods"],["table",["thead",["tr",["th","Name"],["th","Description"]]],["tbody",["tr",["td","blur()"],["td","remove focus"]],["tr",["td","focus()"],["td","get focus"]]]],["h3","TreeNode props"],["blockquote",["p","We recommend you to use ",["code","treeData"]," rather than ",["code","TreeNode"],", to avoid the trouble of manual construction."]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","selectable"],["td","can be selected"],["td","boolean"],["td","true"]],["tr",["td","disableCheckbox"],["td","Disables the checkbox of the treeNode"],["td","boolean"],["td","false"]],["tr",["td","disabled"],["td","Disabled or not"],["td","boolean"],["td","false"]],["tr",["td","isLeaf"],["td","Leaf node or not"],["td","boolean"],["td","false"]],["tr",["td","key"],["td","Required property (unless using ",["code","treeDataSimpleMode"],"), should be unique in the tree"],["td","string"],["td","-"]],["tr",["td","title"],["td","Content showed on the treeNodes"],["td","string","|","ReactNode"],["td","'---'"]],["tr",["td","value"],["td","Will be treated as ",["code","treeNodeFilterProp"]," by default, should be unique in the tree"],["td","string"],["td","-"]]]],["h2","FAQ"],["h3","How to get parent node in onChange?"],["p","We don't provide this since performance consideration. You can get by this way: ",["a",{title:null,href:"https://codesandbox.io/s/wk080nn81k"},"https://codesandbox.io/s/wk080nn81k"]]]}}}]);