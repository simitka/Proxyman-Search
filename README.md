# Proxyman-Search script
Выше можно скачать скрипт для ProxyMan, который ищет в теле запроса/ответа указанную фразу и, в случае успеха, красит и добавляет комментарий к соответствующему запросу/ответу
<img width="1550" alt="Снимок экрана 2022-08-03 в 14 50 38" src="https://user-images.githubusercontent.com/60274458/182590913-53146d04-dbb1-4de0-8d49-823d69894774.png">
### На данный момент скрипт умеет
- [x] Возможность выбрать где будет осуществляться поиск
	- [x] поиск в request body	
	- [x] поиск в response body
	- [x] переключатель request-response
	- [x] возможность искать и в request, и в response
- [x] Два режима поиска:
	- [x] строгий – ищет конкретную фразу
	- [x] мягкий – ищет в том числе фразу внутри фразы 
- [ ] Нормальное описание


# Установка 
1. Скачать, установить и запустить [ProxyMan](https://proxyman.io)
2. Засетапить устройство (подробнее в ProxyMan ➡ Menu bar ➡ Sertificate ➡ Install sertificate in Android/iOS)
3. Открыть Menu bar ➡ Scripting ➡ Script list...
4. Слева внизу нажать на +
5. В поле URL указать желаемый хост или * для всех хостов
6. Скопировать содержание скрипта на GitHub и вставить в окно программы
7. Нажать Save & Active
<img width="1400" alt="image" src="https://user-images.githubusercontent.com/60274458/181373525-048554e1-1838-4aa2-9986-0b00c6ef3a6d.png">

### Документация
- https://docs.proxyman.io/scripting/snippet-code#on-request
- https://docs.proxyman.io/scripting/snippet-code#comment-and-highlight-with-color
