Integrating ChatGpt with google sheets and generating Descriptions to the product details entered.

1.Create a google sheet with 2 columns naming Product Details and Prodcut Description.

2.Got to extensions and open appscript.

3.Generate openai api key and store it in project settings inside the script properties.

4.Paste the code in the editor.

5.Go to triggers and set the trigger on edit with the funtion named run so that whenver there is an edit in the sheet it triggers the main functions which returns the response and updates it in the sheet.

6.Set the trigger onOpen with the function named formating so that whenever you open the sheet it creates certain ui in the sheet.

7.Save the code and try expolring by changing the messages.
