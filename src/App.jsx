/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/#installation/NoBgNARATAdA7DEFIEYQBYAcLMGZMG65wkBsKArFKabgJwYgh5TpxSYlG6nIQCmAO2S4wwFGAngJUgLqQQFACYAzfqSURZQA
 */

import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";
import { transformToCkeditorVariables } from "./uilt";
import { Button } from 'antd';

import "./App.css";
// import TemplateText from "./fun";
// import TemplateText, { replaceMarkersWithEditableDiv } from "./fun";

/**
 * This is a 24-hour evaluation key. Create a free account to use CDN: https://portal.ckeditor.com/checkout?plan=free
 */
const LICENSE_KEY =
  "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NTMxNDIzOTksImp0aSI6ImZlN2FhMzJlLTIyMTAtNGEzYi1hZDlkLWI1ZmJiY2NjM2E3NyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjM2ZTE3MmUzIn0.jtGqTPNdh2g2AEDT2dzuQOP0PJC1Hq3M_Kz5I1qYONUKwPw7LhOBPcjoNQKF9Pg-kUyLgq_h4QrXk7zGBW_bKw";

let initialData =
  '<h2>Evaluation license key 🔑</h2>\n<p>\n\tAn evaluation key is being used in this editor. <a href="https://portal.ckeditor.com/checkout?plan=free">\n\t\tCreate an account to use your own license keys.\n\t</a>\n</p>\n\n<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n';

const htmlEncodedStr = `
	<p>Dear &lt;&lt;customer_name&gt;&gt;,</p>
  	<p>Dear &lt;&lt;customer_name&gt;&gt;,</p>
	<p>Thank you for your purchase on &lt;&lt;purchase_date&gt;&gt;.</p>
	<p>Your order number is <b>&lt;&lt;order_id&gt;&gt;</b>.</p>
	<p>Total amount: $&lt;&lt;order_total&gt;&gt; USD</p>
	<p>Shipping address: &lt;&lt;shipping_address&gt;&gt;</p>
	<p>We hope to see you again soon!</p>
	<p>Best regards,<br/> &lt;&lt;company_name&gt;&gt; team</p>
  <p>Hello &lt;&lt;customer_name&gt;&gt;,</p>
	`;

let editorInitialData = `${transformToCkeditorVariables(htmlEncodedStr)}`;
console.log("Initial Data for CKEditor:", editorInitialData);



editorInitialData = `<p>Dear <span class="variable-placeholder" 
      contenteditable="true" 
      data-variable="customer_name"
      style="background-color: #ffeeba; padding: 2px 4px; border-radius: 3px; border: 1px solid #d39e00; display: inline-block; margin: 0 2px; font-size: inherit;">
      customer_name
    </span>,</p>
	<p>Thank you for your purchase on <span class="variable-placeholder" 
      contenteditable="true" 
      data-variable="purchase_date"
      style="background-color: #ffeeba; padding: 2px 4px; border-radius: 3px; border: 1px solid #d39e00; display: inline-block; margin: 0 2px; font-size: inherit;">
      purchase_date
    </span>.</p>
	<p>Your order number is <b><span class="variable-placeholder" 
      contenteditable="true" 
      data-variable="order_id"
      style="background-color: #ffeeba; padding: 2px 4px; border-radius: 3px; border: 1px solid #d39e00; display: inline-block; margin: 0 2px; font-size: inherit;">
      order_id
    </span></b>.</p>
	<p>Total amount: $<span class="variable-placeholder" 
      contenteditable="true" 
      data-variable="order_total"
      style="background-color: #ffeeba; padding: 2px 4px; border-radius: 3px; border: 1px solid #d39e00; display: inline-block; margin: 0 2px; font-size: inherit;">
      order_total
    </span> USD</p>
	<p>Shipping address: <span class="variable-placeholder" 
      contenteditable="true" 
      data-variable="shipping_address"
      style="background-color: #ffeeba; padding: 2px 4px; border-radius: 3px; border: 1px solid #d39e00; display: inline-block; margin: 0 2px; font-size: inherit;">
      shipping_address
    </span></p>
	<p>We hope to see you again soon!</p>
	<p>Best regards,<br> <span class="variable-placeholder" 
      contenteditable="true" 
      data-variable="company_name"
      style="background-color: #ffeeba; padding: 2px 4px; border-radius: 3px; border: 1px solid #d39e00; display: inline-block; margin: 0 2px; font-size: inherit;">
      company_name
    </span> team</p>
	<p> Hello <span class="variable-placeholder" 
      contenteditable="true" 
      data-variable="customer_name"
      style="background-color: #ffeeba; padding: 2px 4px; border-radius: 3px; border: 1px solid #d39e00; display: inline-block; margin: 0 2px; font-size: inherit;">
      customer_name
    </span>,</p>
	`;

  const handleUpdate = (updateData) => {
    console.log("Update data:", updateData);
  };

  // editorInitialData = replaceMarkersWithEditableDiv(htmlEncodedStr, "variable-placeholder", "<<", ">>");

console.log("Editor Initial Data Type:", typeof editorInitialData);

export default function App() {
  const editorContainerRef = useRef(null);
  const editorMenuBarRef = useRef(null);
  const editorToolbarRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);
  const editorWordCountRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const cloud = useCKEditorCloud({ version: "46.0.0" });

  // Update the variables state structure to store values
  // const [variables, setVariables] = useState({});
  const [variableValues, setVariableValues] = useState({});

  const [count, setCount] = useState(0);

  // const [e, setE] = useState(null)

  //  const {variables, setVariables , initVariablesFromEditor} = useCKEditorSyncedVariables(e);

  // const [variables, setVariables] = useState({});

  // useEffect(() => {
  // 	if (editor) {
  // 		initVariablesFromEditor();
  // 	}
  // }, [editor]);


  // I can access the nodes, but why can't I listen to the event when editing the text?
  // In contenteditable elements (like your spans), the 'input' event does not always fire reliably across all browsers,
  // especially when the element is inside a rich text editor like CKEditor, which manages its own DOM and events.
  // CKEditor may intercept or virtualize editing, so native DOM events like 'input' or 'change' on the span may not fire as expected.
  // Instead, you should use CKEditor's own event system (like the onChange prop or editor.model/document events) to listen for changes.
  // For demonstration, here's what happens with direct DOM event listeners:

  useEffect(() => {
    // const editableSpans = document.querySelectorAll('.variable-placeholder');
    // console.log("editableSpans use effect", editableSpans, "Have a nice day");

    // const customer_names = document.querySelectorAll('[data-variable="customer_name"]');
    // console.log("Customernames", customer_names, "Have a nice day");

    // if (customer_names[0]) {
    //     console.log("Cusomer name", customer_names[0].textContent)
    // }

    // If you want to listen to changes, use CKEditor's onChange or model/document events instead.
    // Native DOM events may not work as expected inside CKEditor.
  }, [editor , count]);

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const toggleReadOnly = () => {
    if (editor) {
      if (isReadOnly) {
        editor.disableReadOnlyMode("my-feature-id");
      } else {
        editor.enableReadOnlyMode("my-feature-id");
      }
      setIsReadOnly(!isReadOnly);

      // Toggle toolbar visibility
      const toolbarElement = editor.ui.view.toolbar.element;
      if (toolbarElement) {
        toolbarElement.style.display = !isReadOnly ? "none" : "flex";
      }
    }
  };

  const { DecoupledEditor, editorConfig } = useMemo(() => {
    if (cloud.status !== "success" || !isLayoutReady) {
      return {};
    }

    const {
      DecoupledEditor,
      GeneralHtmlSupport,
      Alignment,
      AutoImage,
      AutoLink,
      Autosave,
      BalloonToolbar,
      BlockQuote,
      Bold,
      Bookmark,
      CloudServices,
      Code,
      CodeBlock,
      Essentials,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      Heading,
      HorizontalLine,
      ImageBlock,
      ImageCaption,
      ImageEditing,
      ImageInline,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      ImageUtils,
      Indent,
      IndentBlock,
      Italic,
      Link,
      List,
      ListProperties,
      Markdown,
      PageBreak,
      Paragraph,
      RemoveFormat,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Strikethrough,
      Subscript,
      Superscript,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TodoList,
      Underline,
      WordCount,
    } = cloud.CKEditor;

    return {
      DecoupledEditor,
      editorConfig: {
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "fontSize",
            "fontFamily",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "link",
            "insertTable",
            "blockQuote",
            "codeBlock",
            "|",
            "alignment",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "outdent",
            "indent",
          ],
          shouldNotGroupWhenFull: false,
        },
        plugins: [
          GeneralHtmlSupport,
          Alignment,
          AutoImage,
          AutoLink,
          Autosave,
          BalloonToolbar,
          BlockQuote,
          Bold,
          Bookmark,
          CloudServices,
          Code,
          CodeBlock,
          Essentials,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          Heading,
          HorizontalLine,
          ImageBlock,
          ImageCaption,
          ImageEditing,
          ImageInline,
          ImageInsertViaUrl,
          ImageResize,
          ImageStyle,
          ImageTextAlternative,
          ImageToolbar,
          ImageUpload,
          ImageUtils,
          Indent,
          IndentBlock,
          Italic,
          Link,
          List,
          ListProperties,
          Markdown,
          PageBreak,
          Paragraph,
          RemoveFormat,
          SpecialCharacters,
          SpecialCharactersArrows,
          SpecialCharactersCurrency,
          SpecialCharactersEssentials,
          SpecialCharactersLatin,
          SpecialCharactersMathematical,
          SpecialCharactersText,
          Strikethrough,
          Subscript,
          Superscript,
          Table,
          TableCaption,
          TableCellProperties,
          TableColumnResize,
          TableProperties,
          TableToolbar,
          TodoList,
          Underline,
          WordCount,
        ],
        htmlSupport: {
          allow: [
            {
              name: /.*/,
              attributes: true,
              classes: true,
              styles: true,
            },
          ],
        },
        removePlugins: ["htmlWriter"],
        htmlEmbed: {
          showPreviews: true,
        },
        initialData: editorInitialData,

        licenseKey: LICENSE_KEY,
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          decorators: {
            toggleDownloadable: {
              mode: "manual",
              label: "Downloadable",
              attributes: {
                download: "file",
              },
            },
          },
        },
        list: {
          properties: {
            styles: true,
            startIndex: true,
            reversed: true,
          },
        },
        placeholder: "Type or paste your content here!",
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
          ],
        },
      },
    };
  }, [cloud, isLayoutReady]);

  return (
    <div className="main-container">
      {/* <pre>{JSON.stringify(variables, null, 2)}</pre> */}
      <div
        className="editor-container editor-container_document-editor editor-container_include-word-count"
        ref={editorContainerRef}
      >
        <div className="editor-container__menu-bar" ref={editorMenuBarRef}>
          <Button onClick={toggleReadOnly} variant={isReadOnly ? "filled" :"primary"}>
          {isReadOnly ? "Enable Editing" : "Read Only"}
          </Button>
          {/* <button
            onClick={toggleReadOnly}
            style={{
              padding: "8px 16px",
              backgroundColor: isReadOnly ? "#4CAF50" : "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            {isReadOnly ? "Enable Editing" : "Read Only"}
          </button> */}
        </div>
        <div className="editor-container__toolbar" ref={editorToolbarRef}></div>
        <div className="editor-container__editor-wrapper">
          <div className="editor-container__editor" ref={editorRef}>
            <div>
              {cloud.status === "success" &&
                isLayoutReady &&
                DecoupledEditor && (
                  <CKEditor
                    onReady={(editor) => {
                      setEditor(editor);
                      editor.setData(editorInitialData); // Explicitly set the data
                      const wordCount = editor.plugins.get("WordCount");
                      editorWordCountRef.current.appendChild(
                        wordCount.wordCountContainer
                      );
                      editorToolbarRef.current.appendChild(
                        editor.ui.view.toolbar.element
                      );
                      editorMenuBarRef.current.appendChild(
                        editor.ui.view.menuBarView.element
                      );





                      // selective readonly
                      // editor.model.document.on( 'change:isReadOnly', () => {
                      //   const selection = editor.model.document.selection;
                      //   const selectedElement = selection.getSelectedElement();
                      
                      //   if (selectedElement && selectedElement.hasClass('variable-placeholder')) {
                      //     editor.isReadOnly = false;
                      //   } else {
                      //     editor.isReadOnly = true;
                      //   }
                      // });

                      // I will get the variables

                      // const variableNodes =
                      //   editor.ui.view.editable.element.querySelectorAll(
                      //     "[data-variable]"
                      //   );
                      // console.log(
                      //   "DOM nodes with data-variable attribute:",
                      //   variableNodes,
                      //   "Have a nice day"
                      // );

                      // // Initialize variable values with default values
                      // const initialValues = {};
                      // variableNodes.forEach((node) => {
                      //   const varName = node.getAttribute("data-variable");
                      //   initialValues[varName] = varName; // Set default value to the variable name
                      // });
                      // setVariableValues(initialValues);

                      // // Group nodes by their data-variable value
                      // const variableGroups = {};
                      // variableNodes.forEach((node) => {
                      //   const varName = node.getAttribute("data-variable");
                      //   if (!variableGroups[varName]) {
                      //     variableGroups[varName] = [];
                      //   }
                      //   variableGroups[varName].push(node);
                      // });
                      // console.log(
                      //   "Grouped variable nodes by data-variable:",
                      //   variableGroups,
                      //   "Have a nice day"
                      // );

                      // setVariables(variableGroups);

                      // // INSERT_YOUR_CODE
                      // // Get variable keys as array
                      // const variableKeys = Object.keys(variableGroups);
                      // console.log(
                      //   "Variable keys as array:",
                      //   variableKeys,
                      //   "Have a nice day"
                      // );

                      // INSERT_YOUR_CODE
                      // Change innerText of element(s) with data-variable="customer_name"
                      // Try to change textContent instead of innerText
                      // if (variableGroups["customer_name"]) {
                      // 	variableGroups["customer_name"].forEach(node => {
                      // 		node.textContent = "Jhon Doe";
                      // 	});
                      // 	console.log('Changed textContent of data-variable="customer_name" to Jhon Doe. Have a nice day');
                      // } else {
                      // 	console.log('No element found with data-variable="customer_name". Have a nice day');
                      // }

                      // INSERT_YOUR_CODE
                      // not changing yet , I want to change text-content
                      console.log(
                        "Not changing yet, I want to change text-content. Have a nice day"
                      );

                      // INSERT_YOUR_CODE
                      // Change the first variable value to "Jhon Doe"
                      // if (variableKeys.length > 0) {
                      // 	const firstVarName = variableKeys[0];
                      // 	const firstNodes = variableGroups[firstVarName];
                      // 	if (firstNodes && firstNodes.length > 0) {
                      // 		firstNodes.forEach(node => {
                      // 			node.innerText = "Jhon Doe";
                      // 		});
                      // 		console.log(`Set value of first variable (${firstVarName}) to Jhon Doe. Have a nice day`);
                      // 	}
                      // }

                      // // for variables
                      // setE(editor)
                      // initVariablesFromEditor();

                      // Log the data when editor is ready
                      console.log(
                        "Editor content after ready:",
                        editor.getData()
                      );
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();

                      // setCount(count + 1)

                      // Get all variable spans from the editor
                      const editorElement = editor.ui.view.editable.element;
                      const variableSpans = editorElement.querySelectorAll('[data-variable]');

                      console.log("onchange variableSpans", variableSpans);

                      // Process all spans to find any changes
                      Array.from(variableSpans).forEach(span => {
                        const varName = span.getAttribute('data-variable');
                        const currentValue = span.textContent.trim
                        ();
                        
                        // If this instance has been changed
                        if (currentValue !== variableValues[varName]) {
                          // Update state with the new value
                          setVariableValues(prev => ({
                            ...prev,
                            [varName]: currentValue
                          }));
                          
                          // Update all other instances to match
                          const allInstances = editorElement.querySelectorAll(`[data-variable="${varName}"]`);
                          allInstances.forEach(instance => {
                            instance.textContent = currentValue;
                            instance.nodeValue = currentValue
                            instance.innerHTML = currentValue
                          });
                        }
                      });
                    }}
                    editor={DecoupledEditor}
                    config={{
                      ...editorConfig,
                      licenseKey: LICENSE_KEY,
                    }}
                  />
                )}
            </div>
          </div>
        </div>
        <div
          className="editor_container__word-count"
          ref={editorWordCountRef}
        ></div>
      </div>
    </div>
  );
}
