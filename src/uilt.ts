export function transformToCkeditorVariables(htmlTemplate: string): string {
  // First, create a temporary div to parse the HTML string
  const div = document.createElement('div');
  div.innerHTML = htmlTemplate;
  
  // Get the decoded content
  // const decodedContent = div.innerHTML;
  const decodedContent = htmlTemplate;
  console.log('Initial decoded content:', decodedContent);

  // Function to create the variable span
  const createVariableSpan = (varName: string) => {
    return `<span class="variable-placeholder" 
      contenteditable="true" 
      data-variable="${varName}"
      style="background-color: #ffeeba; padding: 2px 4px; border-radius: 3px; border: 1px solid #d39e00; display: inline-block; margin: 0 2px; font-size: inherit;">
      ${varName}
    </span>`;
  };

  // Replace both HTML-encoded and regular variable patterns
  let result = decodedContent.replace(/(&lt;&lt;|<<)(\w+)(&gt;&gt;|>>)/g, (_, start, varName) => {
    return createVariableSpan(varName);
  });

  console.log('Final transformed HTML:', result);
  console.log("TYPE OF STRING", typeof result);
  return result;
}

// Example template for reference:
/*
<p>Dear <<customer_name>>,</p>
<p>Thank you for your purchase on <<purchase_date>>.</p>
<p>Your order number is <b><<order_id>></b>.</p>
<p>Total amount: $<<order_total>> USD</p>
<p>Shipping address: <<shipping_address>></p>
<p>We hope to see you again soon!</p>
<p>Best regards,<br/> <<company_name>> team</p>
*/
  
  
  