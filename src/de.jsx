/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/#installation/NoBgNARATAdA7DEFIEYQBYAcLMGZMG65wkBsKArFKabgJwYgh5TpxSYlG6nIQCmAO2S4wwFGAngJUgLqQQFACYAzfqSURZQA
 */

import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';
import { transformToCkeditorVariables } from './uilt';

import './App.css';

/**
 * This is a 24-hour evaluation key. Create a free account to use CDN: https://portal.ckeditor.com/checkout?plan=free
 */
const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NTIyNzgzOTksImp0aSI6IjJlMTFiMWEzLTY4YjAtNDBiZC04YzcwLWQ1ZDM3MWMxZDAyYSIsImxpY2Vuc2VkSG9zdHMiOlsiKi53ZWJjb250YWluZXIuaW8iLCIqLmpzaGVsbC5uZXQiLCIqLmNzcC5hcHAiLCJjZHBuLmlvIiwiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIiwic2giXSwibGljZW5zZVR5cGUiOiJldmFsdWF0aW9uIiwidmMiOiIzN2NkM2UzMSJ9.6fWRs8_m4wvJbmFWKJRYUa5_FJMQ2jAPFrdUXyYMP1XhCSmmr1HOiAmGk2GOyrSqzpQmSk_7o1IQYlU5uk41-g';

	let initialData ='<h2>Evaluation license key 🔑</h2>\n<p>\n\tAn evaluation key is being used in this editor. <a href="https://portal.ckeditor.com/checkout?plan=free">\n\t\tCreate an account to use your own license keys.\n\t</a>\n</p>\n\n<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n'

	const htmlEncodedStr = `
	<p>Dear &lt;&lt;customer_name&gt;&gt;,</p>
	<p>Thank you for your purchase on &lt;&lt;purchase_date&gt;&gt;.</p>
	<p>Your order number is <b>&lt;&lt;order_id&gt;&gt;</b>.</p>
	<p>Total amount: $&lt;&lt;order_total&gt;&gt; USD</p>
	<p>Shipping address: &lt;&lt;shipping_address&gt;&gt;</p>
	<p>We hope to see you again soon!</p>
	<p>Best regards,<br/> &lt;&lt;company_name&gt;&gt; team</p>
	`;

	 initialData = transformToCkeditorVariables(htmlEncodedStr)
	// initialData = htmlEncodedStr

	console.log("initialData", initialData)

export default function App() {
	const editorContainerRef = useRef(null);
	const editorMenuBarRef = useRef(null);
	const editorToolbarRef = useRef(null);
	const [editor, setEditor] = useState(null);
	const editorWordCountRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);
	const [isReadOnly, setIsReadOnly] = useState(false);
	const cloud = useCKEditorCloud({ version: '46.0.0' });

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const toggleReadOnly = () => {
		if (editor) {
			if (isReadOnly) {
				editor.disableReadOnlyMode('my-feature-id');
			} else {
				editor.enableReadOnlyMode('my-feature-id');
			}
			setIsReadOnly(!isReadOnly);

			// Toggle toolbar visibility
			const toolbarElement = editor.ui.view.toolbar.element;
			if (toolbarElement) {
				toolbarElement.style.display = !isReadOnly ? 'none' : 'flex';
			}
		}
	};

	const { DecoupledEditor, editorConfig } = useMemo(() => {
		if (cloud.status !== 'success' || !isLayoutReady) {
			return {};
		}

		const {
			DecoupledEditor,
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
			WordCount
		} = cloud.CKEditor;

		return {
			DecoupledEditor,
			editorConfig: {
				toolbar: {
					items: [
						'undo',
						'redo',
						'|',
						'heading',
						'|',
						'fontSize',
						'fontFamily',
						'fontColor',
						'fontBackgroundColor',
						'|',
						'bold',
						'italic',
						'underline',
						'|',
						'link',
						'insertTable',
						'blockQuote',
						'codeBlock',
						'|',
						'alignment',
						'|',
						'bulletedList',
						'numberedList',
						'todoList',
						'outdent',
						'indent'
					],
					shouldNotGroupWhenFull: false
				},
				plugins: [
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
					WordCount
				],
				balloonToolbar: ['bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList'],
				fontFamily: {
					supportAllValues: true
				},
				fontSize: {
					options: [10, 12, 14, 'default', 18, 20, 22],
					supportAllValues: true
				},
				heading: {
					options: [
						{
							model: 'paragraph',
							title: 'Paragraph',
							class: 'ck-heading_paragraph'
						},
						{
							model: 'heading1',
							view: 'h1',
							title: 'Heading 1',
							class: 'ck-heading_heading1'
						},
						{
							model: 'heading2',
							view: 'h2',
							title: 'Heading 2',
							class: 'ck-heading_heading2'
						},
						{
							model: 'heading3',
							view: 'h3',
							title: 'Heading 3',
							class: 'ck-heading_heading3'
						},
						{
							model: 'heading4',
							view: 'h4',
							title: 'Heading 4',
							class: 'ck-heading_heading4'
						},
						{
							model: 'heading5',
							view: 'h5',
							title: 'Heading 5',
							class: 'ck-heading_heading5'
						},
						{
							model: 'heading6',
							view: 'h6',
							title: 'Heading 6',
							class: 'ck-heading_heading6'
						}
					]
				},
				image: {
					toolbar: [
						'toggleImageCaption',
						'imageTextAlternative',
						'|',
						'imageStyle:inline',
						'imageStyle:wrapText',
						'imageStyle:breakText',
						'|',
						'resizeImage'
					]
				},
				initialData: initialData,
					
				licenseKey: LICENSE_KEY,
				link: {
					addTargetToExternalLinks: true,
					defaultProtocol: 'https://',
					decorators: {
						toggleDownloadable: {
							mode: 'manual',
							label: 'Downloadable',
							attributes: {
								download: 'file'
							}
						}
					}
				},
				list: {
					properties: {
						styles: true,
						startIndex: true,
						reversed: true
					}
				},
				placeholder: 'Type or paste your content here!',
				table: {
					contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
				}
			}
		};
	}, [cloud, isLayoutReady]);

	return (
		<div className="main-container">
			<div className="editor-container editor-container_document-editor editor-container_include-word-count" ref={editorContainerRef}>
				<div className="editor-container__menu-bar" ref={editorMenuBarRef}>
					<button 
						onClick={toggleReadOnly}
						style={{
							padding: '8px 16px',
							backgroundColor: isReadOnly ? '#4CAF50' : '#f44336',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
							marginRight: '10px'
						}}
					>
						{isReadOnly ? 'Enable Editing' : 'Read Only'}
					</button>
				</div>
				<div className="editor-container__toolbar" ref={editorToolbarRef}></div>
				<div className="editor-container__editor-wrapper">
					<div className="editor-container__editor">
						<div>
							{cloud.status === 'success' && isLayoutReady && DecoupledEditor && (
								<CKEditor
									onReady={editor => {
										setEditor(editor);
										const wordCount = editor.plugins.get('WordCount');
										editorWordCountRef.current.appendChild(wordCount.wordCountContainer);
										editorToolbarRef.current.appendChild(editor.ui.view.toolbar.element);
										editorMenuBarRef.current.appendChild(editor.ui.view.menuBarView.element);
									}}
									onAfterDestroy={() => {
										Array.from(editorWordCountRef.current.children).forEach(child => child.remove());
										Array.from(editorToolbarRef.current.children).forEach(child => child.remove());
										Array.from(editorMenuBarRef.current.children).forEach(child => child.remove());
									}}
									editor={DecoupledEditor}
									config={{
										...editorConfig,
										licenseKey: LICENSE_KEY
									}}
								/>
							)}
						</div>
					</div>
				</div>
				<div className="editor_container__word-count" ref={editorWordCountRef}></div>
			</div>
		</div>
	);
}
