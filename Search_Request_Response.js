  function onResponse(context, url, request, response) {
    ///////////////////////////////////////////// НАСТРОЙКА ПОИСКА ////////////////////////////////////////////
    //С помощью массива color ниже можно выполнить поиск любого количества фраз внутри запроса-ответа
    //Найденные фразы помечаются цветами и добавляются в колонку Comment
    //Для пометки доступны 7 цветов: red, blue, green, yellow, purple, gray, white (commentOnly)
    //У каждого цвета есть параметры поиска, о них ниже:
    ////whatFind – фраза или массив фраз, которые будет искать скрипт
    ////exactSearch – ВКЛ/ВЫКЛ жесткий поиск. В мягком поиске не учитывается регистр и ищутся фразы внутри фраз
    ////whereSearch – искать внутри request / response / everywhere (request+response)
    var color = {
      red: {
        whatFind: '',
        exactSearch: false,
        whereSearch: 'request'
      },
      blue: {
        whatFind: 'ftue_',
        exactSearch: false,
        whereSearch: 'request'
      },
      green: {
        whatFind: [
          '"method": "getToken"',
          '"method": "getContext"'
        ],
        exactSearch: true,
        whereSearch: 'request'
      },
      yellow: {
        whatFind: [
          '"model": "Impression"',
          '"model": "Click"'
        ],
        exactSearch: true,
        whereSearch: 'request'
      },
      purple: {
        whatFind: [
          '"model": "ApplovinAdsImpression"',
          '"model": "AdsClick"',
          '"event_name": "Rewarded Video Request"',
          '"event_name": "Interstitial Showed"'
        ],
        exactSearch: true,
        whereSearch: 'request'
      },
      gray: {
        whatFind: [
          'Gandalf Spot',
          'InvalidNativeElement'
        ],
        exactSearch: true,
        whereSearch: 'request'
      },
      commentOnly: {
        whatFind: '"model": "AppLaunch"',
        exactSearch: false,
        whereSearch: 'everywhere'
      }
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    for (var key in color) {
      if (color[key].whatFind != "") {
        if (Array.isArray(color[key].whatFind) == true) {
          for (var i = 0; i < color[key].whatFind.length; i++) {
            if (searchFun(color[key].whatFind[i], color[key].whereSearch, color[key].exactSearch) != -1) {
              response.color = key;
              response.comment = color[key].whatFind[i];
              return response;
            }
          }
        } else if (Array.isArray(color[key].whatFind) == false) {
          if (searchFun(color[key].whatFind, color[key].whereSearch, color[key].exactSearch) != -1) {
            response.color = key;
            response.comment = color[key].whatFind;
            return response;
          }
        } else if (color[key] == "commentOnly") {
          if (searchFun(color[key].whatFind, color[key].whereSearch, color[key].exactSearch) != -1) {
            response.comment = color[key].whatFind;
            return response;
          }
        }
      }
    }
    return response;

    ///////////////////////////////// FUNCTION /////////////////////////////////
    function searchFun(whatFindValue, whereSearchValue, exactSearchValue) {
      switch (whereSearchValue) {
        case "request": {
          var strJson = request.body;
          break;
        };
      case "response": {
        var strJson = response.body;
        break;
      };
      case "everywhere": {
        var strJson = Object.assign({}, request.body, response.body);
        break;
      };
      };

      strJson = JSON.stringify(strJson).split(': ').join(':').split(':').join(': ').split(',').join(', ');

      switch (exactSearchValue) {
        case true:
          var regEx = new RegExp('(\\W|^)(' + whatFindValue + ')(\\W|$)');
          console.log("\n=============================\nTRUE | regEX = " + regEx);
          console.log("TRUE | value = " + strJson + "\n=============================\n");
          break;
        case false:
          var regEx = new RegExp(whatFindValue, "i");
          console.log("\n=============================\nFALSE | regEX = " + regEx);
          console.log("FALSE | value = " + strJson + "\n=============================\n");
          break;
      }

      return strJson.search(regEx);

    }
  }
  ////////////////////////////////////////////////////////////////////////////
