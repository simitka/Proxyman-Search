let color = {
  red: {
    whatFind: '',
    exactSearch: true
  },
  blue: {
    whatFind: '',
    exactSearch: true
  },
  green: {
    whatFind: '',
    exactSearch: true
  },
  yellow: {
    whatFind: 'Impression',
    exactSearch: true
  },
  purple: {
    whatFind: 'click',
    exactSearch: false
  },
  gray: {
    whatFind: '\"Gandalf Spot',
    exactSearch: true
  }
};

function onRequest(context, url, request) {
  for (var key in color) {
    switch (color[key].exactSearch) {
      case true:
        var strJson = JSON.stringify(request.body).split(':').join(': ');
        var regEx = new RegExp('(\\W|^)(' + color[key].whatFind + ')(\\W|$)');
        break;
      case false:
        var strJson = JSON.stringify(request.body).split(':').join(': ').split('\"').join('');
        var regEx = new RegExp(color[key].whatFind, "i");
        break;
    }
    if (color[key].whatFind != "" && strJson.search(regEx) != -1) {
      console.log("\n===НАШЕЛ \'" + color[key].whatFind + "\', КРАШУ В " + key + " ===\n");
      request.comment = color[key].whatFind
      request.color = key
      return request
    }
  }
}
