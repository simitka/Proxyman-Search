
# Proxyman Search script
A script for searching phrase in the body of the request-response and highlight + adds a comment to the response
<img width="1550" alt="Снимок экрана 2022-08-03 в 14 50 38" src="https://user-images.githubusercontent.com/60274458/182590913-53146d04-dbb1-4de0-8d49-823d69894774.png">
### The script can do:
- [x] Choose where the search will be carried out
	- [x] search in request body	
	- [x] search in response body
	- [x] request-response switcher
	- [x] search in request and response at the same time
- [x] Two search modes:
	- [x] exact search – search for a specific phrase
	- [x] soft search – search including the phrase within the phrase
- [ ] Search for and highlight several different phrases with the same color


# Install & Configurate
Tutorial for install and configurate Proxyman are available to the Appsyoulove team on the [wiki](https://appsyoulove.atlassian.net/l/cp/FpGYX4TA) or easily googled.
To configure the script, you need to change the parameter values in the `color` array
<img width="1552" alt="Снимок экрана 2022-08-07 в 17 13 33-20220807-141336" src="https://user-images.githubusercontent.com/60274458/183296609-e21f5b15-4e81-4d0c-b337-7e66a167fa96.png">
There are 6 objects in the array, each of which indicates which color to highlight the found phrase: red, blue, green, yellow, purple, gray
Each object has 3 properties, through which the search is configured: 

 - `whatFind: 'phrase'` – is what will be searched for
 - `whereSearch: 'request/response/everywhere'` – where the request will be searched
	 - `request` – in the request body
	 - `response` – in the response body 
	 - `everywhere` – in the request & response body at the same time
 - `exactSearch: true/false` – enable/disable exact search
	 - `true` – exact search is enabled[ \[example\]](https://regex101.com/r/D9M5lL/1). The value in whatFind will be searched exactly, case-sensitive and space-sensitive. Searching for a phrase inside another phrase doesn't work
	 - `false` – soft search[ \[example\]](https://regex101.com/r/5EFnY0/1). The value in whatFind will be searched inside other phrases and case-insensitive

### Documentation
- https://appsyoulove.atlassian.net/l/cp/CG1yAfF7
- https://docs.proxyman.io/scripting/snippet-code#on-request
- https://docs.proxyman.io/scripting/snippet-code#comment-and-highlight-with-colo
