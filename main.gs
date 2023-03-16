function chatgpt (prompt,key) {
const messages = [
      {role: "system", content: "Given a set of details of product you should generate small description of max 50 words."},
      {role: "user", content: "Hey can you help me generate short excellent description for my products?"},
      {role: "assistant", content: "Please provide the details of your product."},
      {role: "user", content: prompt}
      ];
  const url = "https://api.openai.com/v1/chat/completions";
  const payload = {
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0.5,
    max_tokens: 200,
  };
  const options = {
    contentType: "application/json",
    headers: { Authorization: "Bearer " + key },
    payload: JSON.stringify(payload),
  };
  const results = JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  var x =  results.choices[0].message.content.trim();
  Logger.log(x);
  return x;
}

function run(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var activeCell = sheet.getActiveCell();
  var sheet = SpreadsheetApp.getActiveSheet();
  var value = activeCell.getValue();
  var col = activeCell.getColumn();
  var row = activeCell.getRow();
  Logger.log(col);
  Logger.log(row);
  Logger.log(value);
  if(col!=1 || value==null || row==1)return;
  var properties = PropertiesService.getScriptProperties();
  var apiKey = properties.getProperty('openai');
  var responce = chatgpt(value,apiKey);
  Logger.log(responce);
  sheet.getRange(row,col+1).setValue(responce);
}
function formating(){
  let sheet = SpreadsheetApp.getActiveSpreadsheet();
  let headers = sheet.getRange('A1:B1');
  let table = sheet.getDataRange();
  headers.setFontWeight('bold');
  headers.setFontColor('white');
  headers.setBackground('#52489C');
  table.setFontFamily('Roboto');
  table.setBorder(true,true,true,true,false,true,'#52489C',SpreadsheetApp.BorderStyle.SOLID);
}
