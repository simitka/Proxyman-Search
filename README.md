# scriptTrash
Выше можно скачать возможно даже рабочий скрипт для ProxyMan, который ищет в теле запроса/ответа указанную тобой фразу и, в случае успеха, красит и добавляет комментарий к соответствующему запросу/ответу

### На данный момент скрипт (не)умеет
- [x] Возможность выбрать где будет осуществляться поиск
	- [x] поиск в request body	
	- [ ] поиск в response body
	- [ ] переключатель request-response
	- [ ] возможность искать и в request, и в response
- [x] Два режима поиска:
	- [x] строгий – ищет конкретную фразу
	- [x] мягкий – ищет в том числе фразу внутри фразы 
- [ ] Нормальное описание

# Установка 
1. Скачать [ProxyMan](https://proxyman.io)
2. Установить, запустить ProxyMan
3. Засетапить устройство (подробнее в ProxyMan ➡ Menu bar ➡ Sertificate ➡ Install sertificate in Android/iOS)
4. Открыть Menu bar ➡ Scripting ➡ Script list...
5. Слева внизу нажать на +
6. В поле URL указать желаемый хост или * для всех хостов
7. Скопировать содержание скрипта на GitHub и вставить в окно программы
8. Нажать Save & Active
<img width="1400" alt="image" src="https://user-images.githubusercontent.com/60274458/181373525-048554e1-1838-4aa2-9986-0b00c6ef3a6d.png">
<img width="1400" alt="image" src="https://user-images.githubusercontent.com/60274458/181373820-c8bfbfe0-225b-4db8-993a-84deb390e34a.png">
