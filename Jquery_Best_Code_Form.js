/**
 * 共通部品のjs
 */
// <editor-fold defaultstate="collapsed" desc="common">
// 定数宣言
var NONE_TYPE = 0;
var CONFIRM_DIALOG_TYPE = 1;
var INFO_DIALOG_TYPE = 2;
var CHECKBOX_DIALOG_TYPE = 3;
var RADIO_DIALOG_TYPE = 4;
var TIMERANGE_DIALOG_TYPE = 5;
var SWITCH_TYPE = 6;
var JSON_ERROR = 'ERROR';
var CNF_SCR_KND_USER_AREA = '1';
var CNF_SCR_KND_OFFICE_ADDRESS = '2';
var CNF_SCR_KND_OFFICE_STATION = '3';
var CNF_SCR_KND_WEATHER_ADDRESS = '4';
var CNF_SCR_KND_WEATHER_FACILLITY = '5';
var CNF_SCR_KND_HOME_STATION = '6';
var CNF_SCR_KND_USE_ROUTE = '7';
var CNF_SCR_KND_USE_ROAD = '8';
var CNF_SCR_KND_USE_NATIONAL_ROAD = '9';
var CNF_SCR_KND_USE_HIGHWAY = '10';
var CNF_SCR_KND_GET_KNOW_TAB = '11';
var CNF_SCR_KND_WEEK_END_TRAVEL = '12';
var CNF_SCR_KND_COLLECTIVE_RECEIVE = '13';
var CNF_SCR_KND_USE_ROAD_AREA = '14';
var CNF_AREA_CODE_LENGTH = 1;
var CNF_PREF_CODE_LENGTH = 2;
var CNF_CITY_CODE_LENGTH = 5;
var CNF_SECTION_OF_VILLAGE_CODE_LENGTH = 8;
var STATION_MAX_ARRAY = 3;
var ROAD_MAX_ARRAY = 80;
var ROUTE_MAX_ARRAY = 20;
var MAX_VALUE_POINT_SETING = 50;
var NO_REGIST_POINT_SETING = 0;
var CNF_PICKER2_HOUR_START = 0;
var CNF_PICKER2_HOUR_END = 23;
var CNF_PICKER2_MINUTE_START = 0;
var CNF_PICKER2_MINUTE_END = 59;
var CNF_PICKER3_YEAR_START = 1900;
var CNF_PICKER3_MONTH_START = 1;
var CNF_PICKER3_MONTH_END = 12;
var CNF_PICKER3_DAY_START = 1;
var CNF_PICKER3_DAY_END = 31;
var CNF_TIMERANGE_TIME_START = 0;
var CNF_TIMERANGE_TIME_END = 23;
var CNF_YOUR_LOCATION = '1';
var CNF_HOME = '2';
var CNF_WORKPLACE = '3';
var CNF_REGIST_LOCATION = '4';
var CNF_DIALOG_TYPE_NO_RESULT = '0';
var CNF_DIALOG_TYPE_OVER_NUM = '1';
var CNF_GENERAL_ROAD_STR = 'generalRoad';
var CNF_HIGHWAY_STR = 'highWay';
var MAX_LENGTH_RESET_BUTTON = 13;
var HALFSIZE_NUMMERIC = 0;
var NONE_EMOTICON = 1;
var INSERT_TEXT = 'insertText';
var INSERT_COMPOSITION_TEXT = 'insertCompositionText';
var INSERT_FROM_PASTE = 'insertFromPaste';
var VIEW_POINT_SELECT_MAP = 'viewPointSelectMap';
var VIEW_SEARCH = 'viewSearch';
/**
 * 共通要素の宣言
 * @type object
 */
var common = {
  configTopBar: "#config_topBar",
  configCommonDialog: ".cnf_allContainer_DIG",
  configCommonErrorDialogOkBtn: "#config_common_error_dialog_ok_btn",
  configCommonErrorDialog: "#config_common_error_dialog",
  configCommonErrorDialogMessage1: '#config_common_error_dialog_message_1',
  configCommonErrorDialogMessage2: '#config_common_error_dialog_message_2',
  configCommonErrorDialogMessage3: '#config_common_error_dialog_message_3',
  htmlBody: '.cnf_allContainer',
  modal: '.modal'
};
/**
 * 共通イベントの宣言
 * @type object
 */
var commonEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.configCommonErrorDialogOkBtnClick();
    this.configCommonAddModal();
  },

  /**
   * htmlにモーダル追加の処理
   * @param {null}
   * @return {null}
   */
  configCommonAddModal: function () {
    $('<div class=modal></div>').hide().appendTo('body');
  },

  /**
   * エラーダイアログでのOKボタンをクリックする時の共通処理
   * @param {null}
   * @return {null}
   */
  configCommonErrorDialogOkBtnClick: function () {
    $(common.configCommonErrorDialogOkBtn).on("click", function () {
      $(common.htmlBody).removeClass("freezeScroll");
      var scrollpos = parseInt($(common.htmlBody).css('top'));
      if (scrollpos < 0) {
        $(common.htmlBody).css({'top': ''});
        window.scrollTo(0, -scrollpos);
      }
      $(common.configCommonErrorDialogMessage1).hide();
      $(common.configCommonErrorDialogMessage2).hide();
      $(common.configCommonErrorDialogMessage3).hide();
      $(common.configCommonDialog).hide();
    });
  },

  /**
   * 画面をロックする時の共通処理
   * @param {null}
   * @return {null}
   */
  configCommonDisableScreen: function () {
    $(common.modal).show();
    $(common.htmlBody).addClass("disabledbutton");
  },

  /**
   * 画面をロック解除する時の共通処理
   * @param {null}
   * @return {null}
   */
  configCommonEnableScreen: function () {
    $(common.modal).hide();
    $(common.htmlBody).removeClass("disabledbutton");
  },

  /**
   * ダイアログを閉じる時の共通処理
   * @param {null}
   * @return {null}
   */
  configCommonCloseDialog: function () {
    $(common.configCommonDialog).hide(0, function () {
      $(common.htmlBody).removeClass("freezeScroll");
      var scrollpos = parseInt($(common.htmlBody).css('top'));
      if (scrollpos < 0) {
        $(common.htmlBody).css({'top': ''});
        window.scrollTo(0, -scrollpos);
      }
    });
  },

  /**
   * ろトグルボタンの状態をロールバックする時の共通処理
   * @param {object} checkbox 要ロールバックのスイッチボタン
   * @return {null}
   */
  configCommonSwitchRollback: function (checkbox) {
    checkbox.prop('checked', !(checkbox.prop('checked')));
  },

  /**
   * Push設定範囲内のスイッチをONにする時の共通処理
   * @param {object} checkbox 要ON設定のスイッチボタン
   * @return {null}
   */
  configPushSettingSwitchOn: function (checkbox) {
    checkbox.prop({'checked': true, 'disabled': false}).parent().removeClass('cnf_toggle_disable_off cnf_toggle_disable_on').siblings('.cnf_flex-box-1').removeClass('cnf_font_disable');
  },

  /**
   * Push設定範囲内のスイッチをOFFにする時の共通処理
   * @param {object} checkbox 要OFF設定のスイッチボタン
   * @return {null}
   */
  configPushSettingSwitchOff: function (checkbox) {
    checkbox.prop({'checked': false, 'disabled': true}).parent().addClass('cnf_toggle_disable_off').siblings('.cnf_flex-box-1').addClass('cnf_font_disable');
  },

  /**
   * Push設定範囲内のスイッチの状態を維持する時の共通処理
   * @param {object} checkbox 要保存のスイッチボタン
   * @return {null}
   */
  configPushSettingSwitchSave: function (checkbox) {
    checkbox.data({'value': Number(checkbox.prop('checked')),'disabled': Number(checkbox.prop('disabled'))});
  },

  /**
   * Push設定範囲内のスイッチの状態をロールバックする時の共通処理
   * @param {object} checkbox 要ロールバックのスイッチボタン
   * @return {null}
   */
  configPushSettingSwitchRollback: function (checkbox) {
    checkbox.prop({'checked': Boolean(checkbox.data('value')), 'disabled': Boolean(checkbox.data('disabled'))});
    var disabledClass = checkbox.prop('checked') ? 'cnf_toggle_disable_on' : 'cnf_toggle_disable_off';
    if (checkbox.prop('disabled')) {
      checkbox.parent().addClass(disabledClass).siblings('.cnf_flex-box-1').addClass('cnf_font_disable');
    } else {
      checkbox.parent().removeClass('cnf_toggle_disable_on cnf_toggle_disable_off').siblings('.cnf_flex-box-1').removeClass('cnf_font_disable');
    }
  },

  /**
   * ajax呼び出しの共通処理
   * @param {string} url ajax呼び出し用のURL
   * @param {int} objectType ajax呼び出し対象種別の共通処理
   * @param {object} object ajax呼び出し対象の共通処理
   * @return {null}
   */
  configCommonSwitchAjax: function (url, objectType, object) {
    $.ajax({
      type: "POST",
      url: url,
      timeout: 10000,
      success: function (value) {
        // ajaxから返却結果のエラーをチェックする共通処理の呼び出し
        // エラーがないなら、ダイアログを閉じる
        if (!commonEvent.configCommonShowError(value, objectType, object)) {
          commonEvent.configCommonCloseDialog();
        }
      },
      error: function () {
        // エラーダイアログ表示処理の呼び出し
        commonEvent.configCommonShowError(JSON_ERROR, objectType, object);
      }
    });
  },

  /**
   * ajaxから返却結果のエラーをチェックする共通処理
   * @param {object} value ajaxから返却json値
   * @param {int} dialogType ajax呼び出しダイアログ種別
   * @param {object} dialogObject ajax呼び出し対象ダイアログ
   * @return {boolean} ajaxの返却結果がエラーの場合、true。それ以外の場合、false
   */
  configCommonShowError: function (value, dialogType, dialogObject) {
    // 画面ロック解除の処理
    commonEvent.configCommonEnableScreen();
    // ajaxからjson値がある、かつ、これらの値がエラー、もしくは、responseCode = 1 または、2の場合の処理
    if (value && (value === JSON_ERROR || value['responseCode'] === 1 || value['responseCode'] === 2)) {
      commonEvent.configCommonCloseDialog();
      if (value['responseCode'] === 1) {
        $(common.configCommonErrorDialogMessage1).show();
      } else if (value['responseCode'] === 2) {
        $(common.configCommonErrorDialogMessage2).show();
      } else {
        $(common.configCommonErrorDialogMessage3).show();
      }
      var scrollpos = $(window).scrollTop();
      $(common.htmlBody).addClass("freezeScroll").css({'top': -scrollpos});
      $(common.configCommonErrorDialog).show();

      // 入力対象のロールバック処理
      switch (dialogType) {
        case CONFIRM_DIALOG_TYPE:
          confirmDialogEvent.configConfirmDialogRollBack();
          break;
        case CHECKBOX_DIALOG_TYPE :
          checkboxDialogEvent.configCheckboxRollback(dialogObject);
          break;
        case RADIO_DIALOG_TYPE :
          radioDialogEvent.configRadioRollback(dialogObject);
          break;
        case TIMERANGE_DIALOG_TYPE :
          commonEvent.configCommonSwitchRollback(dialogObject);
          if ($(informationRejectTimeElement.informationRejectTimeSwitch).prop('checked')) {
            enableScroller();
            $(informationRejectTimeElement.cnfInfomationRejectTimeText).removeClass('cnf_font_disable');
          } else {
            $(informationRejectTimeElement.informationRejectTimeItem).off('click');
            $(informationRejectTimeElement.cnfInfomationRejectTimeText).addClass('cnf_font_disable');
          }
          break;
        case SWITCH_TYPE :
          commonEvent.configCommonSwitchRollback(dialogObject);
          break;
        default :
          break;
      }
      return true;
    } else {
      return false;
    }
  },

  /**
   * スイッチボタンのログ書き込みの共通処理
   * @param {object} object button switch
   * @return {null}
   */
  configCommonWriteLogSwitch: function (object) {
    cmnWriteAccessLog(object.data(object.prop("checked") ? 'log-on' : 'log-off'));
  },

  /**
   * ピッカのホイールグループを作成する共通処理
   * @param {int} start ホイールグループの最初値
   * @param {int} end ホイールグループの最後値
   * @param {string} format ホイールグループの値に入れるフォーマット
   * @return {object} wheel ホイールグループ対象
   */
  configCommonCreateGroupWheel: function (start, end, format) {
    var wheel = {};
    for (var i = start; i <= end; i++) {
      var wheelValue;
      var value = i < 10 ? '0' + i : i;
      wheelValue = typeof format !== 'undefined' ? value + format : value;
      wheel[i] = '<p>' + wheelValue + '</p>';
    }
    return wheel;
  }
};

/**
 * iOS用タッチイベント有効化処理
 */
$(function () {
  $(document).on('touchstart', function () {});
  // ローディング表示
  $(document).ajaxSend(function (event, jqxhr, settings) {
    if (settings.url.indexOf(VIEW_POINT_SELECT_MAP) < 0) {
      loadingStart();
    }
  }).ajaxStop(function () {
    loadingStop();
  }).ajaxError(function () {
    loadingStop();
  });
});

/**
 * ajax loading start
 */
function loadingStart() {
  var html = '<div class="cnf_loading">' +
          '<img class="cnf_loading_img" src="/config/images/Loading.gif" alt="" />' +
          '</div>';
  $('body').append(html);
  $('body').css('overflow', 'hidden');
}

/**
 * ajax loading stop
 */
function loadingStop() {
  $('.cnf_loading_img,.cnf_loading').remove();
  $('body').css('overflow', 'auto');
}

/**
 * 半角数値を削除する共通処理
 * @param {string} value 入力文字列
 * @return {string} value 半角数値を削除した文字列
 */
function removeNoneHalfsizeNummeric(value) {
  return value.replace(/[^0-9]/g, '');
}

/**
 * 半角英文字を削除する共通処理
 * @param {string} value 入力文字列
 * @return {string} value 半角英文字を削除した文字列
 */
function removeNoneHalfsizeAlphabet(value) {
  return value.replace(/[^a-zA-Z]/g, '');
}

/**
 * 半角以外の値を削除する共通処理
 * @param {string} value 入力文字列
 * @return {string} retVal 半角以外の値を削除した文字列
 */
function removeNoneHalfsize(value) {
  var retVal = value;
  for (var i = 0; i < value.length; i++) {
    if (isFullsize(value[i])) {
      retVal = retVal.replace(value[i], '');
    }
  }
  return retVal;
}

/**
 * 全角以外の値を削除する共通処理
 * @param {string} value 入力文字列
 * @return {string} retVal 全角以外の値を削除した文字列
 */
function removeNoneFullsize(value) {
  var retVal = value;
  for (var i = 0; i < value.length; i++) {
    if (!isFullsize(value[i])) {
      retVal = retVal.replace(value[i], '');
    }
  }
  return retVal;
}

/**
 * 絵文字を削除する共通処理
 * @param {string} value 入力文字列
 * @return {string} retVal 絵文字を削除した文字列
 */
function removeEmoticon(value) {
  return value.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|\u200d|\ufe0f|[\u2190-\u21ff])/g, '');
}

/**
 * バイト数で文字列を切る共通処理
 * @param {string} value 入力文字列
 * @param {int} number 切るバイト数
 * @return {string} value バイト数で切った文字列
 */
function cutString(value, number) {
  var bytes = 0;
  var i = 0;
  var symbols = getSymbols(value);
  var output = [];
  while (bytes < number) {
    if (isFullsize(symbols[i])) {
      bytes += 2;
    } else {
      bytes += 1;
    }
    if (bytes <= number) {
      output.push(symbols[i]);
    }
    i++;
  }
  return output.join('');
}

/**
 * 文字列が半角数字かチェックする共通処理
 * @param {string} value 入力文字列
 * @return {boolean} 文字列が半角数字なら、true。それ以外の場合、false
 */
function isHalfsizeNumeric(value) {
  var regex = /^[0-9]+$/g;
  return regex.test(value);
}

/**
 * 文字列が半角かチェックする共通処理
 * @param {string} value 入力文字列
 * @return {boolean} 文字列が半角なら、true。それ以外の場合、false
 */
function isHalfsizeAlphabet(value) {
  var regex = /^[a-zA-Z]+$/g;
  return regex.test(value);
}

/**
 * 文字列が数値、半角文字の結合かチェックする共通処理
 * @param {string} value 入力文字列
 * @return {boolean} 文字列が数値、半角文字の結合なら、true。それ以外の場合、false
 */
function isHalfsizeAlphaNumeric(value) {
  var regex = /^[0-9a-zA-Z]+$/g;
  return regex.test(value);
}

/**
 * 文字列が半角かチェックする共通処理
 * @param {string} value 入力文字列
 * @return {boolean} 文字列が半角なら、true。半角以外の場合、false
 */
function isHalfsize(value) {
  var regex = /^[^ -~｡-ﾟ\x00-\x1f\t]/;
  return !regex.test(value);
}

/**
 * 文字列が全角かチェックする共通処理
 * @param {string} value 入力文字列
 * @return {boolean} 文字列が全角なら、true。全角以外の場合、false
 */
function isFullsize(value) {
  var regex = /^[^ -~｡-ﾟ\x00-\x1f\t]/;
  return regex.test(value);
}

/**
 * 文字列からシンボルの配列を取得する
 * @param {string} string 文字列
 * @return {array} output シンボルの配列
 */
function getSymbols(string) {
  var index = 0;
  var length = string.length;
  var output = [];
  for (; index < length - 1; index++) {
    var charCode = string.charCodeAt(index);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      charCode = string.charCodeAt(index + 1);
      if (charCode >= 0xDC00 && charCode <= 0xDFFF) {
        output.push(string.slice(index, index + 2));
        index++;
        continue;
      }
    }
    output.push(string.charAt(index));
  }
  if (string.charAt(index)) {
    output.push(string.charAt(index));
  }
  return output;
}

/**
 * 文字列のバイト数を取得する共通処理
 * @param {string} string 入力文字列
 * @return {boolean} bytes 文字列のバイト数
 */
function getByte(string) {
  var bytes = 0;
  var symbols = getSymbols(string);
  for(var i = 0; i <= symbols.length - 1; i++) {
    if (isFullsize(symbols[i])) {
      bytes += 2;
    } else {
      bytes += 1;
    }
  }
  return bytes;
}

/**
 * 絵文字がある文字列をチェックする共通処理
 * @param {string} value 入力文字列
 * @return {boolean} 絵文字がある文字列なら、true。絵文字がない文字列なら、false
 */
function isContainsEmoticon(value) {
  var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|\u200d|\ufe0f|[\u2190-\u21ff])/g;
  return regex.test(value);
}

/**
 * は無効な値を含んでいます
 * @param {string} value 入力文字列
 * @return {boolean} 絵文字がある文字列なら、true。絵文字がない文字列なら、false
 */
function isContainsInvalidValue(value) {
  var regex = /[^\u0000-\u007f\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uffef\u4e00-\u9faf]/g;
  return regex.test(value);
}

/**
 * 無効な値を削除する
 * @param {string} value 入力文字列
 * @return {string} 文字列が無効な値を削除しました
 */
function removeInvalidValue(value) {
  var regex = /[^\u0000-\u007f\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uffef\u4e00-\u9faf]/g;
  return value.replace(regex, '');
}

/**
 * 感情の最初の文字が含まれています
 * @param {string} value 入力文字列
 * @return {boolean} 絵文字がある文字列なら、true。絵文字がない文字列なら、false
 */
function isFirstEmoticon(value) {
  var regex = /[\ud800-\udbff]/g;
  return regex.test(value);
}
/**
 * ニックネームの設定値のカット
 * @param {string} value 入力文字列
 * @return {string} カットした値
 */
function cutNickname(inputText) {
  var totalByte = getByte(inputText);
  position = inputText.length;
  while (totalByte > 20) {
    inputText = inputText.substring(0, position - 1) + inputText.substring(position);
    position -= 1;
    totalByte = getByte(inputText);
  }
  return inputText;
}
/**
 * テキストボックスのフィルタ入力テキスト
 * @param {string} textbox テキストボックスのID
 * @param {int} maxLength 最大長
 * @param {int} type タイプ
 * @param {string} callback コールバック関数
 * @param {object} settingBtn 設定ボタン
 * @param {string} settingEvent 設定機能
 * @return null
 */
function commonFilterTextBox(textbox, maxLength, type, callback, settingBtn, settingEvent) {
  var $textbox = $(textbox);
  var ime = false;
  var imePosition = 0;
  var position = 0;
  $textbox.on('input', function (event) {
    if (!ime) {
      var text = event.originalEvent.srcElement.value;
      var inputText;
      if (type === HALFSIZE_NUMMERIC) {
        inputText = removeNoneHalfsizeNummeric(text);
      }
      if (type === NONE_EMOTICON) {
        inputText = removeInvalidValue(text);
      }
      if (type === null) {
        inputText = text;
      }
      var totalByte = getByte(inputText);
      position = $textbox[0].selectionStart - text.length + inputText.length;
      while (totalByte > maxLength) {
        inputText = inputText.substring(0, position - 1) + inputText.substring(position);
        position -= 1;
        totalByte = getByte(inputText);
      }
      $textbox.val(inputText);
      setTimeout(function () {
        $textbox[0].setSelectionRange(position, position);
      }, 0);
      if (callback) {
        callback(ime);
      }
    }
  }).on('compositionstart', function () {
    ime = true;
    imePosition = $textbox[0].selectionStart;
  }).on('compositionend', function (event) {
    ime = false;
    if ($textbox[0].selectionStart !== imePosition) {
      var text = event.originalEvent.srcElement.value;
      var inputText;
      if (type === HALFSIZE_NUMMERIC) {
        inputText = removeNoneHalfsizeNummeric(text);
      }
      if (type === NONE_EMOTICON) {
        inputText = removeInvalidValue(text);
      }
      if (type === null) {
        inputText = text;
      }
      var totalByte = getByte(inputText);
      position = $textbox[0].selectionStart - text.length + inputText.length;
      while (totalByte > maxLength) {
        inputText = inputText.substring(0, position - 1) + inputText.substring(position);
        position -= 1;
        totalByte = getByte(inputText);
      }
      $textbox.val(inputText);
      setTimeout(function () {
        $textbox[0].setSelectionRange(position, position);
      }, 0);
      if (callback) {
        callback(ime);
      }
    }
  }).on('keyup', function (event) {
    if (event.which === 13) {
      if (callback) {
        if (callback(ime)) {
          $(settingBtn).trigger(settingEvent);
        }
      } else {
        $(settingBtn).trigger(settingEvent);
      }
    }
  });
}
//</editor-fold>
/**
 * 確認ダイアログのjs
 */
//<editor-fold defaultstate="collapsed" desc="confirmDialog">
/**
 * 確認ダイアログ画面の各要素の宣言
 * @type object
 */
var confirmDialog = {
  configCommonDialog: ".cnr_popupContainer",
  configConfirmDialogCommon: '#config_confirm_dialog_common',
  configConfirmDialogSwitchOn: "#config_confirm_dialog_switch_on",
  configConfirmDialogSwitchOff: "#config_confirm_dialog_switch_off",
  configConfirmOkButtonBtn: '#config_confirm_ok_button_btn',
  configConfirmCancelBtn: '#config_confirm_cancel_btn',
  configConfirmOkSwitchOn: '#config_confirm_ok_switch_on',
  configConfirmCancelSwitchOn: '#config_confirm_cancel_switch_on',
  configConfirmOkSwitchOff: '#config_confirm_ok_switch_off',
  configConfirmCancelSwitchOff: '#config_confirm_cancel_switch_off',
  configConfirmDialogSwitch: "#config_confirm_dialog_switch",
  configConfirmDialogButton: "#config_confirm_dialog_button"
};
/**
 * 確認ダイアログ画面の各イベントの宣言
 * @type object
 */
var confirmDialogEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.configConfirmDialogSwitchClick();
    this.configConfirmDialogButtonClick();
    this.configConfirmOkSwitchOnClick();
    this.configConfirmOkSwitchOffClick();
    this.configConfirmOkButtonBtnClick();
    this.configConfirmCancelButtonClick();
    this.configConfirmCancelSwitchOnClick();
    this.configConfirmCancelSwitchOffClick();
  },

  /**
   * カード表示設定のスイッチを押下する時に確認ダイアログを表示する共通処理
   * @param {null}
   * @return {null}
   */
  configConfirmDialogSwitchClick: function () {
    $(confirmDialog.configConfirmDialogSwitch).on("click", function () {
      var $switch = $(this);
      event.preventDefault();
      if (!$switch.prop("checked")) {
        cmnWriteAccessLog($switch.data('log-off'));
        $(confirmDialog.configConfirmDialogSwitchOff).show(0, function () {
          var scrollpos = $(window).scrollTop();
          $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
        });
      } else {
        cmnWriteAccessLog($switch.data('log-on'));
        $(confirmDialog.configConfirmDialogSwitchOn).show(0, function () {
          var scrollpos = $(window).scrollTop();
          $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
        });
      }
    });
  },

  /**
   * ボタンを押下する時に確認ダイアログを表示する共通処理
   * @param {null}
   * @return {null}
   */
  configConfirmDialogButtonClick: function () {
    $(confirmDialog.configConfirmDialogButton).on("click", function () {
      event.preventDefault();
      $(confirmDialog.configConfirmDialogCommon).show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },

  /**
   * ボタン風の確認ダイアログのOKボタンをクリックする時の共通処理
   * @param {null}
   * @return {null}
   */
  configConfirmOkButtonBtnClick: function () {
    $(confirmDialog.configConfirmOkButtonBtn).on("click", function () {
      cmnWriteAccessLog($(this).data('log'));
      loadingStart();
      $(confirmDialog.configConfirmDialogButton).closest('form').submit();
    });
  },

  /**
   * ボタン風の確認ダイアログのキャンセルボタンをクリックする時の共通処理
   * @param {null}
   * @return {null}
   */
  configConfirmCancelButtonClick: function () {
    $(confirmDialog.configConfirmCancelBtn).on("click", function () {
      cmnWriteAccessLog($(this).data('log'));
      commonEvent.configCommonCloseDialog();
    });
  },

  /**
   * スイッチONの確認ダイアログのOKボタンをクリックする時の共通処理
   * @param {null}
   * @return {null}
   */
  configConfirmOkSwitchOnClick: function () {
    $(confirmDialog.configConfirmOkSwitchOn).on("click", function () {
      cmnWriteAccessLog($(this).data('log-onok'));
      var $switch = $(confirmDialog.configConfirmDialogSwitch);
      $switch.prop("checked", true);
      var namespace = $switch.data('namespace');
      // 設定Pushスイッチボタンの保存・ON設定の処理を呼び出す
      if (namespace) {
        var functionNameSave = $switch.data('function') + "Save";
        window[namespace][functionNameSave]();
        var functionName = $switch.data('function') + "On";
        if ($switch.data('contract') === 0 || typeof $switch.data('contract') === 'undefined') {
          window[namespace][functionName]();
        }
      }
      commonEvent.configCommonDisableScreen();
      commonEvent.configCommonSwitchAjax($(this).data("url"), CONFIRM_DIALOG_TYPE);
    });
  },

  /**
   * スイッチONの確認ダイアログのキャンセルボタンをクリックする時の共通処理
   * @param {null}
   * @return {null}
   */
  configConfirmCancelSwitchOnClick: function () {
    $(confirmDialog.configConfirmCancelSwitchOn).on("click", function () {
      cmnWriteAccessLog($(this).data('log-oncc'));
      $(confirmDialog.configConfirmDialogSwitch).prop("checked", false);
      commonEvent.configCommonCloseDialog();
    });
  },

  /**
   * スイッチOFFの確認ダイアログのOKボタンをクリックする時の共通処理
   * @param {null}
   * @return {null}
   */
  configConfirmOkSwitchOffClick: function () {
    $(confirmDialog.configConfirmOkSwitchOff).on("click", function () {
      cmnWriteAccessLog($(this).data('log-offok'));
      var $switch = $(confirmDialog.configConfirmDialogSwitch);
      $switch.prop("checked", false);
      // 設定Pushスイッチボタンの保存・OFF設定の処理を呼び出す
      var namespace = $switch.data('namespace');
      if (namespace) {
        var functionNameSave = $switch.data('function') + "Save";
        window[namespace][functionNameSave]();
        var functionName = $switch.data('function') + "Off";
        if ($switch.data('contract') === 0 || typeof $switch.data('contract') === 'undefined') {
          window[namespace][functionName]();
        }
      }
      commonEvent.configCommonDisableScreen();
      commonEvent.configCommonSwitchAjax($(this).data("url"), CONFIRM_DIALOG_TYPE);
    });
  },

  /**
   * スイッチOFFの確認ダイアログのキャンセルボタンをクリックする時の共通処理
   * @param {null}
   * @return {null}
   */
  configConfirmCancelSwitchOffClick: function () {
    $(confirmDialog.configConfirmCancelSwitchOff).on("click", function () {
      cmnWriteAccessLog($(this).data('log-offcc'));
      $(confirmDialog.configConfirmDialogSwitch).prop("checked", true);
      commonEvent.configCommonCloseDialog();
    });
  },

  /**
   * 確認ダイアログのエラーajaxを呼び出す時にロールバックする共通処理
   * @param {null}
   * @return {null}
   */
  configConfirmDialogRollBack: function () {
    var $switch = $(confirmDialog.configConfirmDialogSwitch);
    var namespace = $switch.data('namespace');
    if (namespace) {
      var functionNameRollback = $switch.data('function') + "Rollback";
      window[namespace][functionNameRollback]();
    }
    $switch.prop('checked', !$switch.prop('checked'));
  }
};
//</editor-fold>
/**
 * インフォダイアログファイルのjs
 */
//<editor-fold defaultstate="collapsed" desc="infoDialog">
/**
 * インフォダイアログの各要素の宣言
 * @type object
 */
var infoDialog = {
  configInfoDialog: "#config_info_dialog",
  configInfoDialogOkBtn: ".config_info_dialog_ok_btn"
};
/**
 * インフォダイアログの各イベントの宣言
 * @type object
 */
var infoDialogEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.configInfoDialogOkBtnClick();
  },

  /**
   * インフォダイアログのOKボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  configInfoDialogOkBtnClick: function () {
    $(infoDialog.configInfoDialogOkBtn).on("click", function () {
      var url = $(this).attr("data-url");

      if (url === "close") {
        commonEvent.configCommonCloseDialog(); 
      } else if (url || url !== "" || url.length > 0) {
        location.href = url;
      } else {
        window.history.back(-1);
      }
    });
  }
};
//</editor-fold>
/**
 * ラジオボタンダイアログファイルのjs
 */
//<editor-fold defaultstate="collapsed" desc="checkboxDialog">
/**
 * チェックボックスダイアログ画面の各要素の宣言
 * @type object
 */
var checkboxDialog = {
  configCommonDialog: ".cnr_popupContainer",
  configCheckboxDialogOkBtn: ".config_checkbox_dialog_ok_btn",
  configCheckboxDialogCancelBtn: ".config_checkbox_dialog_cancel_btn",
  configCheckboxInputDialog: "[id*=config_checkbox_dialog] input[type=checkbox]",
  configCheckboxInput: "input[type=checkbox]"
};
/**
 * チェックボックスダイアログ画面の各イベントの宣言
 * @type object
 */
var checkboxDialogEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.configCheckboxDialogOkBtnClick();
    this.configCheckboxDialogCancelBtnClick();
    this.configCheckboxInputChange();
  },

  /**
   * チェックボックスダイアログでOKボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  configCheckboxDialogOkBtnClick: function () {
    $(checkboxDialog.configCheckboxDialogOkBtn).on("click", function () {
      // ajaxを成功に呼び出したら、画面に表示させる値を取得
      var thisBtn = $(this);
      var postData = {};
      var data = {};
      var checkedCheckBoxArray = [];
      var name = thisBtn.data("name");
      var id = thisBtn.data("id");
      var postUrl = thisBtn.data("url");
      var checkbox = thisBtn.parents(checkboxDialog.configCommonDialog).find(checkboxDialog.configCheckboxInput);
      checkbox.each(function () {
        data[$(this).attr('key')] = $(this).attr('value');
      });
      checkedCheckBoxArray = thisBtn.parents(checkboxDialog.configCommonDialog).find("input:checked").map(function () {
        return $(this).data('item');
      }).get();
      var settingValue = checkedCheckBoxArray.length ? checkedCheckBoxArray.join('、') : "<label class = 'cnf_listItem_fontValue cnf_listItem_fontBlue'>未設定</label>";
      postData['viewId'] = thisBtn.data("viewid");
      postData[name] = data;
      commonEvent.configCommonDisableScreen();
      cmnWriteAccessLog(thisBtn.data('log'));

      // ajaxを呼び出し、チェックボックスダイアログで選択済みの値をポスト
      $.ajax({
        type: "POST",
        url: postUrl,
        data: postData,
        timeout: 10000,
        success: function (value) {
          if (!commonEvent.configCommonShowError(value, CHECKBOX_DIALOG_TYPE, checkbox)) {
            $("#" + id).html(settingValue);
            profileEvent.cnfShowHideResetButton();
            checkboxDialogEvent.configCheckboxSave(checkbox);
            commonEvent.configCommonCloseDialog();
          }
        },
        error: function () {
          commonEvent.configCommonShowError(JSON_ERROR, CHECKBOX_DIALOG_TYPE, checkbox);
        }
      });
    });
  },

  /**
   * チェックボックスダイアログのキャンセルボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  configCheckboxDialogCancelBtnClick: function () {
    $(checkboxDialog.configCheckboxDialogCancelBtn).on("click", function () {
      var thisBtn = $(this);
      cmnWriteAccessLog(thisBtn.data('log'));
      var checkbox = thisBtn.parents(checkboxDialog.configCommonDialog).find(checkboxDialog.configCheckboxInput);
      checkboxDialogEvent.configCheckboxRollback(checkbox);
      commonEvent.configCommonCloseDialog();
    });
  },

  /**
   * チェックボックスダイアログのチェックボックスが変わる時の処理
   * @param {null}
   * @return {null}
   */
  configCheckboxInputChange: function () {
    $(checkboxDialog.configCheckboxInputDialog).on('change', function () {
      this.value = this.checked ? 1 : 0;
    });
  },

  /**
   * チェックボックスダイアログのエラーajaxを呼び出す時にチェックボックスをロールバックする共通処理
   * @param {object} checkbox checkbox チェックボックスダイアログ
   * @return {null}
   */
  configCheckboxRollback: function (checkbox) {
    checkbox.each(function () {
      $(this).prop('checked', Boolean($(this).data('value')));
    });
  },

  /**
   * チェックボックスダイアログのチェックボックス値を保存する共通処理
   * @param {object} checkbox checkbox チェックボックスダイアログ
   * @return {null}
   */
  configCheckboxSave: function (checkbox) {
    checkbox.each(function () {
      $(this).data('value', Number($(this).prop('checked')));
    });
  }
};
//</editor-fold>
/**
 * ラジオボタンダイアログファイルのjs
 */
//<editor-fold defaultstate="collapsed" desc="radioDialog">
/**
 * ラジオダイアログ画面の各要素の宣言
 * @type object
 */
var radioDialog = {
  configCommonDialog: ".cnr_popupContainer",
  configRadioDialogOkBtn: ".config_radio_dialog_ok_btn",
  configRadioDialogCancelBtn: ".config_radio_dialog_cancel_btn",
  cnfRadioChecked: "input[type='radio']:checked",
  cnfRadioDialog: "[id*=config_radio_dialog] input[type='radio']",
  cnfRadio: "input[type='radio']"
};
/**
 * ラジオダイアログ画面の各イベントの宣言
 * @type object
 */
var radioDialogEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.configRadioDialogOkBtnClick();
    this.configRadioDialogCancelBtnClick();
    this.configRadioInputChange();
  },

  /**
   * ラジオダイアログでOKボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  configRadioDialogOkBtnClick: function () {
    $(radioDialog.configRadioDialogOkBtn).on("click", function () {
      // ajaxを成功に呼び出したら、画面に表示させる値を取得
      var thisBtn = $(this);
      var thisParent = thisBtn.parents(radioDialog.configCommonDialog);
      var radio = thisParent.find(radioDialog.cnfRadio);
      var key = thisParent.find(radioDialog.cnfRadioChecked).attr('key');
      if (typeof key !== 'undefined') {
        var val = key.indexOf(':') !== -1 ? key.replace(':', '-') : key;
        var item = thisParent.find(radioDialog.cnfRadioChecked).data('item');
        var settingValue = key === "" ? "<label class = 'cnf_listItem_fontValue cnf_listItem_fontBlue'>未設定</label>" : item;
        var name = thisBtn.data("name");
        var id = thisBtn.data("id");
        var postUrl = thisBtn.data("url") + "&" + name + "=" + val;
        commonEvent.configCommonDisableScreen();
        cmnWriteAccessLog(thisBtn.data('log'));

      // ajaxを呼び出し、ラジオダイアログで選択済みの値をポスト
        $.ajax({
          type: "POST",
          url: postUrl,
          timeout: 10000,
          success: function (value) {
            if (!commonEvent.configCommonShowError(value, RADIO_DIALOG_TYPE, radio)) {
              $("#" + id).html(settingValue);
              profileEvent.cnfShowHideResetButton();
              checkboxDialogEvent.configCheckboxSave(radio);
              commonEvent.configCommonCloseDialog();
            }
          },
          error: function () {
            commonEvent.configCommonShowError(JSON_ERROR, RADIO_DIALOG_TYPE, radio);
          }
        });
      } else {
        commonEvent.configCommonCloseDialog();
      }
    });
  },

  /**
   * ラジオダイアログのキャンセルボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  configRadioDialogCancelBtnClick: function () {
    $(radioDialog.configRadioDialogCancelBtn).on("click", function () {
      var thisBtn = $(this);
      cmnWriteAccessLog(thisBtn.data('log'));
      var radio = thisBtn.parents(radioDialog.configCommonDialog).find(radioDialog.cnfRadio);
      radioDialogEvent.configRadioRollback(radio);
      commonEvent.configCommonCloseDialog();
    });
  },

  /**
   * ラジオダイアログのラジオが変わる時の処理
   * @param {null}
   * @return {null}
   */
  configRadioInputChange: function () {
    $(radioDialog.cnfRadioDialog).on('change', function () {
      this.value = Number(this.checked);
    });
  },

  /**
   * ラジオダイアログのエラーajaxを呼び出す時にラジオをロールバックする共通処理
   * @param {object} radio radio ラジオダイアログ
   * @return {null}
   */
  configRadioRollback: function (radio) {
    radio.each(function () {
      var thisRadio = $(this);
      this.value = thisRadio.data('value');
      thisRadio.prop('checked', Boolean(thisRadio.data('value')));
    });
  },

  /**
   * ラジオダイアログのラジオ値を保存する共通処理
   * @param {object} radio radio ラジオダイアログ
   * @return {null}
   */
  configRadioSave: function (radio) {
    radio.each(function () {
      $(this).data('value', Number($(this).prop('checked')));
    });
  }
};
//</editor-fold>
/**
 * 住所変更確認ダイアログのjs
 */
//<editor-fold defaultstate="collapsed" desc="addressInfo">
/**
 * 住所変更確認ダイアログの各要素の宣言
 * @type object
 */
var addressInfo = {
  configAddressInfoConfirmDialog: '#config_address_info_confirm_dialog',
  configAddressInfoCancelBtn: '#config_address_info_cancel_btn',
  configAddressInfoOkBtn: '#config_address_info_ok_btn',
  profileUserAreaName: '#cnf_userArea a p:eq(1)',
  updateAddressInfoUrl: 'input[name=updateAddressInfo]'
};
/**
 * 住所変更確認ダイアログの各イベントの宣言
 * @type object
 */
var addressInfoEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.configConfirmOkBtnClick();
    this.configConfirmCancelBtnClick();
  },

  /**
   * S-99-1-21ダイアログのキャンセルボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  configConfirmCancelBtnClick: function () {
    $(addressInfo.configAddressInfoCancelBtn).on('click', function () {
      var $thisBtn = $(this);
      commonEvent.configCommonDisableScreen();
      $.ajax({
        type: "POST",
        url: $(addressInfo.updateAddressInfoUrl).val() + '&latitudeDEG=' + $thisBtn.data('lat') + "&" + "longitudeDEG=" + $thisBtn.data('lon'),
        timeout: 10000,
        success: function (value) {
          if (!commonEvent.configCommonShowError(value, NONE_TYPE)) {
            $(addressInfo.profileUserAreaName).text($thisBtn.data('address'));
            commonEvent.configCommonCloseDialog();
          }
        },
        error: function () {
          commonEvent.configCommonShowError(JSON_ERROR, NONE_TYPE);
        }
      });
    });
  },

  /**
   * S-99-1-21ダイアログのOKボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  configConfirmOkBtnClick: function () {
    $(addressInfo.configAddressInfoOkBtn).on('click', function () {
      var $thisBtn = $(this);
      commonEvent.configCommonDisableScreen();
      $.ajax({
        type: "POST",
        timeout: 10000,
        url: $(addressInfo.updateAddressInfoUrl).val() + '&latitudeDEG=' + $thisBtn.data('lat') + "&" + "longitudeDEG=" + $thisBtn.data('lon'),
        success: function (value) {
          if (!commonEvent.configCommonShowError(value, NONE_TYPE)) {
            $(addressInfo.profileUserAreaName).text($thisBtn.data('address'));
            commonEvent.configCommonCloseDialog();
          }
        },
        error: function () {
          commonEvent.configCommonShowError(JSON_ERROR, NONE_TYPE);
        }
      });
    });
  },

  /**
   * S-99-1-21ダイアログ表示の処理
   * @param {null}
   * @return {null}
   */
  displayConfigConfirmDialog: function () {
    $(addressInfo.configAddressInfoConfirmDialog).show(0, function () {
     var scrollpos = $(window).scrollTop();
      $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
    });
  }
};
//</editor-fold>
/**
 * 地域行政のjs
 */
//<editor-fold defaultstate="collapsed" desc="contentsArea">
/**
 * 地域行政画面の各要素の宣言
 * @type object
 */
var contentsAreaElement = {
  cnfSchemecategory: "#config_contentarea_schemecategory",
  cnfPapercategory: "#config_contentarea_papercategory",
  cnfArea: "#config_contentarea_area",
  cnfUncontracted: "#config_contentarea_uncontracted",
  cnfSystemNoticePushSetting: "#config_contentarea_systemNoticePushSetting",
  cnfPrmagazineNoticePushSetting: "#config_contentarea_prmagazineNoticePushSetting",
  cnfColumnUpdatepushSetting: "#config_contentarea_columnUpdatepushSetting"
};
/**
 * 地域行政画面の各イベントの宣言
 * @type object
 */
var contentsAreaEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.schemecategoryClick();
    this.papercategoryClick();
    this.areaClick();
    this.uncontractedClick();
    this.systemNoticePushSettingClick();
    this.prmagazineNoticePushSettingClick();
    this.columnUpdatepushSettingClick();
  },
  /**
   * 設定PushスイッチをONに設定する処理
   * @param {null}
   * @return {null}
   */
  contentsAreaSwitchFunctionOn: function ()
  {
    commonEvent.configPushSettingSwitchOn($(contentsAreaElement.cnfSystemNoticePushSetting));
    commonEvent.configPushSettingSwitchOn($(contentsAreaElement.cnfPrmagazineNoticePushSetting));
    commonEvent.configPushSettingSwitchOn($(contentsAreaElement.cnfColumnUpdatepushSetting));
  },
  /**
   * 設定PushスイッチをOFFに設定する処理
   * @param {null}
   * @return {null}
   */
  contentsAreaSwitchFunctionOff: function ()
  {
    commonEvent.configPushSettingSwitchOff($(contentsAreaElement.cnfSystemNoticePushSetting));
    commonEvent.configPushSettingSwitchOff($(contentsAreaElement.cnfPrmagazineNoticePushSetting));
    commonEvent.configPushSettingSwitchOff($(contentsAreaElement.cnfColumnUpdatepushSetting));
  },
  /**
   * 設定Pushスイッチの値の保存処理
   * @param {null}
   * @return {null}
   */
  contentsAreaSwitchFunctionSave: function () {
    commonEvent.configPushSettingSwitchSave($(contentsAreaElement.cnfSystemNoticePushSetting));
    commonEvent.configPushSettingSwitchSave($(contentsAreaElement.cnfPrmagazineNoticePushSetting));
    commonEvent.configPushSettingSwitchSave($(contentsAreaElement.cnfColumnUpdatepushSetting));
  },
  /**
   * 設定Pushスイッチの値のロールバック処理
   * @param {null}
   * @return {null}
   */
  contentsAreaSwitchFunctionRollback: function () {
    commonEvent.configPushSettingSwitchRollback($(contentsAreaElement.cnfSystemNoticePushSetting));
    commonEvent.configPushSettingSwitchRollback($(contentsAreaElement.cnfPrmagazineNoticePushSetting));
    commonEvent.configPushSettingSwitchRollback($(contentsAreaElement.cnfColumnUpdatepushSetting));
  },
  /**
   * 指定制度カテゴリ項目部をクリックする時の処理
   * @param {null}
   * @return {null}
   */
  schemecategoryClick: function () {
    $(contentsAreaElement.cnfSchemecategory).on("click", function () {
      location.href = $(contentsAreaElement.cnfSchemecategory).data('url');
    });
  },
  /**
   * 指定の広報紙カテゴリ項目部をクリックする時の処理
   * @param {null}
   * @return {null}
   */
  papercategoryClick: function () {
    $(contentsAreaElement.cnfPapercategory).on("click", function () {
      location.href = $(contentsAreaElement.cnfPapercategory).data('url');
    });
  },
  /**
   * 見たい地域項目部をクリックする時の処理
   * @param {null}
   * @return {null}
   */
  areaClick: function () {
    $(contentsAreaElement.cnfArea).on("click", function () {
      location.href = $(contentsAreaElement.cnfArea).data('url');
    });
  },
  /**
   * 未契約ユーザの場合に詳しくはコチラ項目をクリックする時の処理
   * @param {null}
   * @return {null}
   */
  uncontractedClick: function () {
    $(contentsAreaElement.cnfUncontracted).on("click", function () {
      location.href = $(contentsAreaElement.cnfUncontracted).data('url');
    });
  },
  /**
   * 制度に関するお知らせ通知項目をクリックする時の処理
   * @param {null}
   * @return {null}
   */
  systemNoticePushSettingClick: function () {
    $(contentsAreaElement.cnfSystemNoticePushSetting).on("click", function () {
      var $systemNotice = $(this);
      commonEvent.configCommonDisableScreen();
      commonEvent.configCommonWriteLogSwitch($systemNotice);
      var url = $systemNotice.data('url')
              + "&systemNoticePushSetting="
              + Number($systemNotice.prop('checked'));
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $systemNotice);
    });
  },
  /**
   * 広報紙に関するお知らせ通知項目をクリックする時の処理
   * @param {null}
   * @return {null}
   */
  prmagazineNoticePushSettingClick: function () {
    $(contentsAreaElement.cnfPrmagazineNoticePushSetting).on("click", function () {
      var $prmagazineNotice = $(this);
      commonEvent.configCommonDisableScreen();
      commonEvent.configCommonWriteLogSwitch($prmagazineNotice);
      var url = $prmagazineNotice.data('url')
              + "&prmagazineNoticePushSetting="
              + Number($prmagazineNotice.prop('checked'));
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $prmagazineNotice);
    });
  },
  /**
   * カラム更新通知項目をクリックする時の処理
   * @param {null}
   * @return {null}
   */
  columnUpdatepushSettingClick: function () {
    $(contentsAreaElement.cnfColumnUpdatepushSetting).on("click", function () {
      var $columnUpdate = $(this);
      commonEvent.configCommonDisableScreen();
      commonEvent.configCommonWriteLogSwitch($columnUpdate);
      var url = $columnUpdate.data('url')
              + "&columnUpdatepushSetting="
              + Number($columnUpdate.prop('checked'));
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $columnUpdate);
    });
  }
};
//</editor-fold>
/**
 * コンテンツのjs
 */
//<editor-fold defaultstate="collapsed" desc="contents">
/**
 * contents画面の各要素の宣言
 * @type object
 */
var contentsElement = {
  cnfContentsWeather: "#cnf_contentsWeather",
  cnfContentsTrafficRoute: "#cnf_contentsTrafficRoute",
  cnfContentsDepartureRemind: "#cnf_contentsDepartureRemind",
  cnfContentsLeisureInfo: "#cnf_contentsLeisureInfo",
  cnfContentsGourmet: "#cnf_contentsGourmet",
  cnfContentsShoppingMemo: "#cnf_contentsShoppingMemo",
  cnfContentsArea: "#cnf_contentsArea",
  cnfContentsSchedule: "#cnf_contentsSchedule",
  cnfContentsDocomoNotice: "#cnf_contentsDocomoNotice",
  cnfContentsConsumerElectronics: "#cnf_contentsConsumerElectronics"
};
/**
 * contents画面の各イベントの宣言
 * @type object
 */
var contentsEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.cnfContentsWeatherClick();
    this.cnfContentsTrafficRouteClick();
    this.cnfContentsDepartureRemindClick();
    this.cnfContentsLeisureInfoClick();
    this.cnfContentsGourmetClick();
    this.cnfContentsShoppingMemoClick();
    this.cnfContentsAreaClick();
    this.cnfContentsScheduleClick();
    this.cnfContentsDocomoNoticeClick();
    this.cnfContentsConsumerElectronicsClick();
  },

  /**
   * 天気・気象をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherClick: function () {
    $(contentsElement.cnfContentsWeather).on("click", function () {
      location.href = "viewContentsWeather?wv=1";
    });
  },

  /**
   * 交通運行・ルート案内をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsTrafficRouteClick: function () {
    $(contentsElement.cnfContentsTrafficRoute).on("click", function () {
      location.href = "viewContentsTrafficRoute?wv=1";
    });
  },

  /**
   * 早めに出発アラームをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsDepartureRemindClick: function () {
    $(contentsElement.cnfContentsDepartureRemind).on("click", function () {
      location.href = "viewContentsDepartureRemind?wv=1";
    });
  },

  /**
   * 週末おでかけ情報をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsLeisureInfoClick: function () {
    $(contentsElement.cnfContentsLeisureInfo).on("click", function () {
      location.href = "viewContentsLeisureInfo?wv=1";
    });
  },

  /**
   * グルメ・予約をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsGourmetClick: function () {
    $(contentsElement.cnfContentsGourmet).on("click", function () {
      location.href = "viewContentsGourmet?wv=1";
    });
  },

  /**
   * チラシ・買い物メモをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsShoppingMemoClick: function () {
    $(contentsElement.cnfContentsShoppingMemo).on("click", function () {
      location.href = "viewContentsShoppingMemo?wv=1";
    });
  },

  /**
   * 地域行政をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsAreaClick: function () {
    $(contentsElement.cnfContentsArea).on("click", function () {
      location.href = "viewContentsArea?wv=1";
    });
  },

  /**
   * スケジュール&メモをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsScheduleClick: function () {
    $(contentsElement.cnfContentsSchedule).on("click", function () {
      location.href = "viewContentsSchedule?wv=1";
    });
  },

  /**
   * ドコモからのお知らせをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsDocomoNoticeClick: function () {
    $(contentsElement.cnfContentsDocomoNotice).on("click", function () {
      location.href = "viewContentsDocomoNotice?wv=1";
    });
  },

  /**
   * 家電をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsConsumerElectronicsClick: function () {
    $(contentsElement.cnfContentsConsumerElectronics).on("click", function () {
      location.href = "viewContentsConsumerElectronics?wv=1";
    });
  }
};
//</editor-fold>
/**
 * ドコモからのお知らせのjs
 */
//<editor-fold defaultstate="collapsed" desc="contentsDocomoNotice">
/**
 * contents画面の各要素の宣言
 * @type object
 */
var contentsDocomoNoticeElement = {
  cnfViewContentsDocomoNoticePushSetting: "#cnf_viewContentsDocomoNoticePushSetting",
  cnfViewContentsDocomoNoticeUrl: "#cnf_viewContentsDocomoNoticeUrl"
};
/**
 * contents画面の各イベントの宣言
 * @type object
 */
var contentsDocomoNoticeEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.cnfViewContentsDocomoNoticePushSettingClick();
  },

  /**
   * お知らせ通知ボタンスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfViewContentsDocomoNoticePushSettingClick: function () {
    $(contentsDocomoNoticeElement.cnfViewContentsDocomoNoticePushSetting).on("click", function () {
      var $docomoNotice = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsDocomoNoticeElement.cnfViewContentsDocomoNoticeUrl).val();
      var url = urlUpdate + "&docomoNoticePermissionFlg=" + Number($docomoNotice.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($docomoNotice);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $docomoNotice);
    });
  }
};
//</editor-fold>
/**
 * 週末おでかけ情報画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="contentsLeisureInfo">
/**
 * viewContentsLeisureInfo画面の各要素の宣言
 * @type object
 */
var contentsLeisureInfoElement = {
  contentsLeisureInfoSetArea: "#contentsLeisureInfo_setArea",
  contentsLeisureInfoApps: "#contentsLeisureInfo_apps",
  contentsLeisureInfoPushSetting: "#contentsLeisureInfo_pushSetting",
  urlUpdateLeisureInfo: "#urlUpdateLeisureInfo",
  urlViewRadio: "#urlViewRadio",
  urlContractExecution: "#urlContractExecution",
  cnfContentsLeisureText: ".cnf_contentsLeisureText",
  cnfContentsLeisureSwitch: ".cnf_contentsLeisureSwitch",
  cnfContentsLeisurePushDisabled: "#cnf_contentsLeisurePushDisabled",
  viewId: "#viewId"
};

/**
 * viewContentsLeisureInfo画面の各イベントの宣言
 * @type object
 */
var contentsLeisureInfoEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.contentsLeisureInfoSetAreaClick();
    this.contentsLeisureInfoAppsClick();
    this.contentsLeisureInfoPushSettingClick();
  },

  /**
   * 設定PushスイッチをONに設定する処理
   * @param {null}
   * @return {null}
   */
  contentsLeisureInfoSwitchFunctionOn: function ()
  {
    if ($(contentsLeisureInfoElement.cnfContentsLeisurePushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOn($(contentsLeisureInfoElement.contentsLeisureInfoPushSetting));
    }
  },

  /**
   * 設定PushスイッチをOFFに設定する処理
   * @param {null}
   * @return {null}
   */
  contentsLeisureInfoSwitchFunctionOff: function ()
  {
    if ($(contentsLeisureInfoElement.cnfContentsLeisurePushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOff($(contentsLeisureInfoElement.contentsLeisureInfoPushSetting));
    }
  },

  /**
   * 設定Pushスイッチの値の保存処理
   * @param {null}
   * @return {null}
   */
  contentsLeisureInfoSwitchFunctionSave: function () {
    commonEvent.configPushSettingSwitchSave($(contentsLeisureInfoElement.contentsLeisureInfoPushSetting));
  },

  /**
   * 設定Pushスイッチの値のロールバック処理
   * @param {null}
   * @return {null}
   */
  contentsLeisureInfoSwitchFunctionRollback: function () {
    commonEvent.configPushSettingSwitchRollback($(contentsLeisureInfoElement.contentsLeisureInfoPushSetting));
  },

  /**
   * 設定範囲項目部をクリックするイベント
   * @param {null}
   * @return {null}
   */
  contentsLeisureInfoSetAreaClick: function () {
    $(contentsLeisureInfoElement.contentsLeisureInfoSetArea).on("click", function () {
      // 設定地域画面[S-3-5-2]に遷移する
      location.href = $(contentsLeisureInfoElement.urlViewRadio).val();
    });
  },

  /**
   * 詳しくはコチラボタンをクリックするイベント
   * @param {null}
   * @return {null}
   */
  contentsLeisureInfoAppsClick: function () {
    $(contentsLeisureInfoElement.contentsLeisureInfoApps).on("click", function () {
      // 契約訴求画面(アプリ)に遷移する
      location.href = $(contentsLeisureInfoElement.urlContractExecution).val();
    });
  },

  /**
   * 旅行先おでかけ情報項目のスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  contentsLeisureInfoPushSettingClick: function () {
    $(contentsLeisureInfoElement.contentsLeisureInfoPushSetting).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsLeisureInfoElement.urlUpdateLeisureInfo).val();
      var url = urlUpdate + "&gooutPushSetting=" + Number($switch.prop('checked'));

      // タップログ
      commonEvent.configCommonWriteLogSwitch($switch);

      // 週末おでかけ情報設定
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  }
};
//</editor-fold>
/**
 * スケジュール＆メモ画面のjs
 *
 * スケジュール＆メモ画面の処理全部
 */
//<editor-fold defaultstate="collapsed" desc="contentsSchedule">
/**
 * Elementのインスタンス生成
 * @type object
 */
var contentsScheduleElement = {
  contentsScheduleUrlList: "#contentsSchedule_urlList",
  contentsScheduleViewId: "#contentsSchedule_viewId",
  cnfContentsSchedulePushDisabled: "#cnf_contentsSchedulePushDisabled",
  contentsScheduleTodayPlansPushSetting: "#contentsSchedule_todayPlansPushSetting",
  contentsScheduleTodayPlansPushSettingCheckbox: "#contentsSchedule_todayPlansPushSettingCheckbox"
};

/**
 * Eventのインスタンス生成
 * @type object
 */
var contentsScheduleEvent = {

  /**
   * コンストラクタ
   * 
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.contentsScheduleElementClick();
  },

  /**
   * スケジュール＆メモのカードの表示SwitchのOnイベント
   *
   * @param {null}
   * @return {null}
   */
  contentsScheduleSwitchFunctionOn: function () {
    // PushDisabledのステータスをチェック
    if ($(contentsScheduleElement.cnfContentsSchedulePushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOn($(contentsScheduleElement.contentsScheduleTodayPlansPushSettingCheckbox));
    }

  },

  /**
   * スケジュール＆メモのカードの表示SwitchのOFFイベント
   *
   * @param {null}
   * @return {null}
   */
  contentsScheduleSwitchFunctionOff: function () {
    // PushDisabledのステータスをチェック
    if ($(contentsScheduleElement.cnfContentsSchedulePushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOff($(contentsScheduleElement.contentsScheduleTodayPlansPushSettingCheckbox));
    }
  },

  /**
   * スケジュール＆メモのカードの表示SwitchのステータスをSaveイベント
   *
   * @param {null}
   * @return {null}
   */
  contentsScheduleSwitchFunctionSave: function () {
    commonEvent.configPushSettingSwitchSave($(contentsScheduleElement.contentsScheduleTodayPlansPushSettingCheckbox));
  },

  /**
   * スケジュール＆メモのカードの表示SwitchのステータスをRollbackイベント
   *
   * @param {null}
   * @return {null}
   */
  contentsScheduleSwitchFunctionRollback: function () {
    commonEvent.configPushSettingSwitchRollback($(contentsScheduleElement.contentsScheduleTodayPlansPushSettingCheckbox));
  },

  /**
   * スケジュール＆メモの今日の予定通知SwitchのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  contentsScheduleElementClick: function () {
    $(contentsScheduleElement.contentsScheduleTodayPlansPushSettingCheckbox).on("click", function () {
      var $switch = $(this);
      // 共通アクセスログに書き込みを呼び出す。
      commonEvent.configCommonWriteLogSwitch($switch);
      // 共通画面ロック処理を呼び出す。
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsScheduleElement.contentsScheduleUrlList).val();
      var url = urlUpdate + "&todayPlansPushSetting=" + Number($switch.prop('checked'));
      // 変更のajax通信処理を呼び出す。
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  }
};
//</editor-fold>
/**
 * チラシ・買い物メモのjs
 */
//<editor-fold defaultstate="collapsed" desc="contentsShoppingMemo">
/**
 * contentsShoppingMemo画面の各要素の宣言
 * @type object
 */
var contentsShoppingMemoElement = {
  cnfViewContentsShoppingMemoRecommendPushSetting: "#cnf_viewContentsShoppingMemoRecommendPushSetting",
  cnfViewContentsShoppingMemoFavoriteStore: "#cnf_viewContentsShoppingMemoFavoriteStore",
  cnfViewContentsShoppingMemoCheapPriceNotification: "#cnf_viewContentsShoppingMemoCheapPriceNotification",
  cnfViewContentsShoppingMemoContractExecution: "#cnf_viewContentsShoppingMemoContractExecution",
  cnfViewContentsShoppingMemoUrlUpdate: "#cnf_viewContentsShoppingMemoUrlUpdate",
  cnfViewContentsShoppingMemoUrlFavoriteStore: "#cnf_viewContentsShoppingMemoUrlFavoriteStore",
  cnfViewContentsShoppingMemoUrlCheapPriceNotification: "#cnf_viewContentsShoppingMemoUrlCheapPriceNotification",
  cnfViewContentsShoppingMemoUrlContractExecution: "#cnf_viewContentsShoppingMemoUrlContractExecution",
  cnfViewContentsShoppingMemoPushDisabled: "#cnf_viewContentsShoppingMemoPushDisabled"
};
/**
 * contents画面の各イベントの宣言
 * @type object
 */
var contentsShoppingMemoEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.cnfViewContentsShoppingMemoRecommendPushSettingClick();
    this.cnfViewContentsShoppingMemoFavoriteStoreClick();
    this.cnfViewContentsShoppingMemoCheapPriceNotificationClick();
    this.cnfViewContentsShoppingMemoContractExecutionClick();
  },

  /**
   * カードの表示のボタンスイッチONをクリックするイベント
   * @param {null}
   * @return {null}
   */
  contentsShoppingMemoSwitchFunctionOn: function ()
  {
    if ($(contentsShoppingMemoElement.cnfViewContentsShoppingMemoPushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOn($(contentsShoppingMemoElement.cnfViewContentsShoppingMemoRecommendPushSetting));
    }
  },

  /**
   * カードの表示のボタンスイッチOFFをクリックするイベント
   * @param {null}
   * @return {null}
   */
  contentsShoppingMemoSwitchFunctionOff: function ()
  {
    if ($(contentsShoppingMemoElement.cnfViewContentsShoppingMemoPushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOff($(contentsShoppingMemoElement.cnfViewContentsShoppingMemoRecommendPushSetting));
    }
  },

  /**
   * カードの表示のダイアログOKをクリックするイベント
   * @param {null}
   * @return {null}
   */
  contentsShoppingMemoSwitchFunctionSave: function () {
    commonEvent.configPushSettingSwitchSave(
      $(contentsShoppingMemoElement.cnfViewContentsShoppingMemoRecommendPushSetting)
    );
  },

  /**
   * カードの表示のダイアログキャンセルをクリックするイベント
   * @param {null}
   * @return {null}
   */
  contentsShoppingMemoSwitchFunctionRollback: function () {
    commonEvent.configPushSettingSwitchRollback(
      $(contentsShoppingMemoElement.cnfViewContentsShoppingMemoRecommendPushSetting)
    );
  },

  /**
   * レコメンド通知のボタンスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfViewContentsShoppingMemoRecommendPushSettingClick: function () {
    $(contentsShoppingMemoElement.cnfViewContentsShoppingMemoRecommendPushSetting).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsShoppingMemoElement.cnfViewContentsShoppingMemoUrlUpdate).val();
      var url = urlUpdate + "&recommendPushSetting=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },

  /**
   * お気に入り店舗をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfViewContentsShoppingMemoFavoriteStoreClick: function () {
    $(contentsShoppingMemoElement.cnfViewContentsShoppingMemoFavoriteStore).on("click", function () {
      location.href = $(contentsShoppingMemoElement.cnfViewContentsShoppingMemoUrlFavoriteStore).val();
    });
  },

  /**
   * 安値通知をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfViewContentsShoppingMemoCheapPriceNotificationClick: function () {
    $(contentsShoppingMemoElement.cnfViewContentsShoppingMemoCheapPriceNotification).on("click", function () {
      location.href = $(contentsShoppingMemoElement.cnfViewContentsShoppingMemoUrlCheapPriceNotification).val();
    });
  },

  /**
   * 詳しくはコチラをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfViewContentsShoppingMemoContractExecutionClick: function () {
    $(contentsShoppingMemoElement.cnfViewContentsShoppingMemoContractExecution).on("click", function () {
      location.href = $(contentsShoppingMemoElement.cnfViewContentsShoppingMemoUrlContractExecution).val();
    });
  }
};
//</editor-fold>
/**
 * 交通運行・ルート案内画面Js
 */
//<editor-fold defaultstate="collapsed" desc="contentsTrafficRoute">
var linkUpdateTrafficRoute = "";
/**
 * contentsTrafficRoute画面の各要素の宣言
 * @type object
 */
var contentsTrafficRouteElement = {
  nearStationList: "#cnf_nearStationList",
  trainList: "#cnf_trainList",
  roadList: "#cnf_roadList",
  lasttrainGuideReceiveDay: "#cnf_lasttrainGuideReceiveDay",
  lasttrainSearchStartTime: "#cnf_lasttrainSearchStartTime",
  trainInfoReceiveDay: "#cnf_trainInfoReceiveDay",
  trainAccidentInfoReceive: "#cnf_trainAccidentInfoReceive",
  trafficJamInfoReceiveDay: "#cnf_trafficJamInfoReceiveDay",
  notTrafficJamInfoReceive: "#cnf_notTrafficJamInfoReceive",
  trafficJamreceiveTime1: "#cnf_trafficJamreceiveTime1",
  trafficJamreceiveTime2: "#cnf_trafficJamreceiveTime2",
  trafficJamreceiveTime3: "#cnf_trafficJamreceiveTime3",
  lastTrainPush: "#cnf_lastTrainPush",
  trainInfoPush: "#cnf_trainInfoPush",
  trafficJamInfoPush: "#cnf_trafficJamInfoPush",
  graduallyDeparturePush: "#cnf_graduallyDeparturePush",
  lineNameClass: ".cnf_lineName",
  lastTrainPushCheckbox: "#cnf_lastTrainPushCheckbox",
  trainInfoPushCheckbox: "#cnf_trainInfoPushCheckbox",
  trafficJamInfoPushCheckbox: "#cnf_trafficJamInfoPushCheckbox",
  graduallyDeparturePushCheckbox: "#cnf_graduallyDeparturePushCheckbox",
  trainAccidentInfoReceiveCheckbox: "#cnf_trainAccidentInfoReceiveCheckbox",
  notTrafficJamInfoReceiveCheckbox: "#cnf_notTrafficJamInfoReceiveCheckbox",
  cnfContentsTrafficRoutePushDisabled: "#cnf_contentsTrafficRoutePushDisabled"
};
/**
 * viewContentsLeisureInfo画面の各イベントの宣言
 * @type object
 */
var contentsTrafficRouteEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.cnfLasttrainGuideReceiveDayClick();
    this.cnfNearStationListClick();
    this.cnfTrainListClick();
    this.cnfRoadListClick();
    this.cnfLasttrainSearchStartTimeClick();
    this.cnfTrainInfoReceiveDayClick();
    this.cnfTrainAccidentInfoReceiveClick();
    this.cnfTrafficJamInfoReceiveDayClick();
    this.cnfNotTrafficJamInfoReceiveClick();
    this.cnfTrafficJamreceiveTime1Click();
    this.cnfTrafficJamreceiveTime2Click();
    this.cnfTrafficJamreceiveTime3Click();
    this.cnfLastTrainPushClick();
    this.cnfTrainInfoPushClick();
    this.cnfTrafficJamInfoPushClick();
    this.cnfGraduallyDeparturePushClick();
    this.cnfInitDisplay();
  },
  /**
   * カードONに変更
   * @param {null}
   * @return {null}
  */
  contentsTrafficRouteFunctionOn: function () {
    if ($(contentsTrafficRouteElement.cnfContentsTrafficRoutePushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOn($(contentsTrafficRouteElement.lastTrainPushCheckbox));
      commonEvent.configPushSettingSwitchOn($(contentsTrafficRouteElement.trainInfoPushCheckbox));
      commonEvent.configPushSettingSwitchOn($(contentsTrafficRouteElement.trafficJamInfoPushCheckbox));
      commonEvent.configPushSettingSwitchOn($(contentsTrafficRouteElement.graduallyDeparturePushCheckbox));
    }
  },
  /**
   * カードOFFに変更
   * @param {null}
   * @return {null}
  */
  contentsTrafficRouteFunctionOff: function () {
    if ($(contentsTrafficRouteElement.cnfContentsTrafficRoutePushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOff($(contentsTrafficRouteElement.lastTrainPushCheckbox));
      commonEvent.configPushSettingSwitchOff($(contentsTrafficRouteElement.trainInfoPushCheckbox));
      commonEvent.configPushSettingSwitchOff($(contentsTrafficRouteElement.trafficJamInfoPushCheckbox));
      commonEvent.configPushSettingSwitchOff($(contentsTrafficRouteElement.graduallyDeparturePushCheckbox));
    }
  },
  /**
   * カードの保存
   * @param {null}
   * @return {null}
  */
  contentsTrafficRouteFunctionSave: function () {
    commonEvent.configPushSettingSwitchSave($(contentsTrafficRouteElement.lastTrainPushCheckbox));
    commonEvent.configPushSettingSwitchSave($(contentsTrafficRouteElement.trainInfoPushCheckbox));
    commonEvent.configPushSettingSwitchSave($(contentsTrafficRouteElement.trafficJamInfoPushCheckbox));
    commonEvent.configPushSettingSwitchSave($(contentsTrafficRouteElement.graduallyDeparturePushCheckbox));
  },
  /**
   * カードのロースバック
   * @param {null}
   * @return {null}
  */
  contentsTrafficRouteFunctionRollback: function () {
    commonEvent.configPushSettingSwitchRollback($(contentsTrafficRouteElement.lastTrainPushCheckbox));
    commonEvent.configPushSettingSwitchRollback($(contentsTrafficRouteElement.trainInfoPushCheckbox));
    commonEvent.configPushSettingSwitchRollback($(contentsTrafficRouteElement.trafficJamInfoPushCheckbox));
    commonEvent.configPushSettingSwitchRollback($(contentsTrafficRouteElement.graduallyDeparturePushCheckbox));
  },
  /**
   * 自宅最寄駅のロースバック
   * @param {null}
   * @return {null}
   */
  cnfNearStationListClick: function () {
    $(contentsTrafficRouteElement.nearStationList).on("click", function () {
      dataLink = $(this).attr('data-link');
      location.href = dataLink;
    });
  },
  /**
   * よく利用する路線のロースバック
   * @param {null}
   * @return {null}
   */
  cnfTrainListClick: function () {
    $(contentsTrafficRouteElement.trainList).on("click", function () {
      dataLink = $(this).attr('data-link');
      location.href = dataLink;
    });
  },
  /**
   * よく利用する道路のロースバック
   * @param {null}
   * @return {null}
   */
  cnfRoadListClick: function () {
    $(contentsTrafficRouteElement.roadList).on("click", function () {
      dataLink = $(this).attr('data-link');
      location.href = dataLink;
    });
  },
  /**
   * クリックで終電案内受信曜日選択ダイアログ[S-99-4-2]を表示
   * @param {null}
   * @return {null}
  */
  cnfLasttrainGuideReceiveDayClick: function () {
    $(contentsTrafficRouteElement.lasttrainGuideReceiveDay).on("click", function () {
      // タップ時終電案内受信曜日選択ダイアログ[S-99-4-2]を表示する
      $('#config_checkbox_dialog0').show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * クリックで終電検索開始時間選択ダイアログ[S-99-3-6]を表示
   * @param {null}
   * @return {null}
  */
  cnfLasttrainSearchStartTimeClick: function () {
    $(contentsTrafficRouteElement.lasttrainSearchStartTime).on("click", function () {
      // タップ時終電検索開始時間選択ダイアログ[S-99-3-6]を表示する
      $('#config_radio_dialog0').show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * クリックで運行情報受信曜日選択ダイアログ[S-99-4-3]を表示
   * @param {null}
   * @return {null}
   */
  cnfTrainInfoReceiveDayClick: function () {
    $(contentsTrafficRouteElement.trainInfoReceiveDay).on("click", function () {
      // 運行情報受信曜日選択ダイアログ[S-99-4-3]を表示する
      $('#config_checkbox_dialog1').show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * 遅延、工事情報なども受信更新のスイッチ
   * @param {null}
   * @return {null}
  */
  cnfTrainAccidentInfoReceiveClick: function () {
    $(contentsTrafficRouteElement.trainAccidentInfoReceiveCheckbox).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var url = linkUpdateTrafficRoute + "&trainAccidentInfoReceive=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },
  /**
   * 渋滞情報受信曜日更新のスイッチ
   * @param {null}
   * @return {null}
   */
  cnfTrafficJamInfoReceiveDayClick: function () {
    $(contentsTrafficRouteElement.trafficJamInfoReceiveDay).on("click", function () {
      // タップ時渋滞情報受信曜日選択ダイアログ[S-99-4-4]を表示する
      $('#config_checkbox_dialog2').show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * 渋滞なしのときも受信更新のスイッチ
   * @param {null}
   * @return {null}
  */
  cnfNotTrafficJamInfoReceiveClick: function () {
    $(contentsTrafficRouteElement.notTrafficJamInfoReceiveCheckbox).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var url = linkUpdateTrafficRoute + "&notTrafficJamInfoReceive=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },
  /**
   * クリックで受信時間1選択ダイアログ[S-99-3-7]を表示
   * @param {null}
   * @return {null}
  */
  cnfTrafficJamreceiveTime1Click: function () {
    $(contentsTrafficRouteElement.trafficJamreceiveTime1).on("click", function () {
      // タップ時受信時間1選択ダイアログ[S-99-3-7]を表示する
      $('#config_radio_dialog1').show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * クリックで受信時間2選択ダイアログ[S-99-3-8]を表示
   * @param {null}
   * @return {null}
  */
  cnfTrafficJamreceiveTime2Click: function () {
    $(contentsTrafficRouteElement.trafficJamreceiveTime2).on("click", function () {
      // タップ時受信時間2選択ダイアログ[S-99-3-8]を表示する
      $('#config_radio_dialog2').show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * クリックで受信時間3選択ダイアログ[S-99-3-9]を表示
   * @param {null}
   * @return {null}
   */
  cnfTrafficJamreceiveTime3Click: function () {
    $(contentsTrafficRouteElement.trafficJamreceiveTime3).on("click", function () {
      // タップ時受信時間3選択ダイアログ[S-99-3-9]を表示する
      $('#config_radio_dialog3').show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * 終電Push更新のスイッチ
   * @param {null}
   * @return {null}
  */
  cnfLastTrainPushClick: function () {
    $(contentsTrafficRouteElement.lastTrainPushCheckbox).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var url = linkUpdateTrafficRoute + "&lastTrainPush=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },
  /**
   * 鉄道運行情報Push更新のスイッチ
   * @param {null}
   * @return {null}
  */
  cnfTrainInfoPushClick: function () {
    $(contentsTrafficRouteElement.trainInfoPushCheckbox).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var url = linkUpdateTrafficRoute + "&trainInfoPush=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },
  /**
   * 道路渋滞情報Push設定更新のスイッチ
   * @param {null}
   * @return {null}
   */
  cnfTrafficJamInfoPushClick: function () {
    $(contentsTrafficRouteElement.trafficJamInfoPushCheckbox).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var url = linkUpdateTrafficRoute + "&trafficJamInfoPush=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },
  /**
   * そろそろ出発Push更新のスイッチ
   * @param {null}
   * @return {null}
  */
  cnfGraduallyDeparturePushClick: function () {
    $(contentsTrafficRouteElement.graduallyDeparturePushCheckbox).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var url = linkUpdateTrafficRoute + "&graduallyDeparturePush=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },
  /**
   * 画面スクロール
   * @param {null}
   * @return {null}
   */
  cnfInitDisplay: function () {
    var initDisplay = $('input:hidden[name=cnf_initDisplay]').val();
    linkUpdateTrafficRoute = $('input:hidden[name=cnf_urlUpdateTrafficRoute]').val();
    if (initDisplay !== undefined && initDisplay !== null) {
      if (initDisplay === 'focusHomeStation') {
        // Handler for .ready() called.
        $('html, body').animate({
          scrollTop: $("#cnf_focusWorkplace").offset().top
        }, 'slow');
      } else if (initDisplay === 'focusOftenUseRoute') {
        // Handler for .ready() called.
        $('html, body').animate({
          scrollTop: $("#cnf_focusOftenUseRoute").offset().top
        }, 'slow');
      } else if (initDisplay === 'focusOftenUseRoad') {
        // Handler for .ready() called.
        $('html, body').animate({
          scrollTop: $("#cnf_focusOftenUseRoad").offset().top
        }, 'slow');
      }
    }
  }
};
//</editor-fold>
/**
 * 天気・気象のjs
 */
//<editor-fold defaultstate="collapsed" desc="contentsWeather">
/**
 * viewContentsLeisureInfo画面の各要素の宣言
 * @type object
 */
var contentsWeatherElement = {
  cnfContentsWeatherRegistLocation: "#cnf_contentsWeatherRegistLocation",
  cnfContentsWeatherDisplayRegistLocation: "#cnf_contentsWeatherDisplayRegistLocation",
  cnfContentsWeatherContractExecution: "#cnf_contentsWeatherContractExecution",
  cnfContentsWeatherPushSetting: "#cnf_contentsWeatherPushSetting",
  cnfContentsWeatherRainPushSetting: "#cnf_contentsWeatherRainPushSetting",
  cnfContentsWeatherWarningPushSetting: "#cnf_contentsWeatherWarningPushSetting",
  cnfContentsWeatherAdvisoryPushSetting: "#cnf_contentsWeatherAdvisoryPushSetting",
  cnfContentsWeatherThunderPushSetting: "#cnf_contentsWeatherThunderPushSetting",
  cnfContentsWeatherTyphoonPushSetting: "#cnf_contentsWeatherTyphoonPushSetting",
  cnfContentsWeatherEarthquakePushSetting: "#cnf_contentsWeatherEarthquakePushSetting",
  cnfContentsWeatherEruptionPushSetting: "#cnf_contentsWeatherEruptionPushSetting",
  cnfContentsWeatherUrlUpdate: "#cnf_contentsWeatherUrlUpdate",
  cnfContentsWeatherUrlRegistLocation: "#cnf_contentsWeatherUrlRegistLocation",
  cnfContentsWeatherUrlDisplayRegistLocation: "#cnf_contentsWeatherUrlDisplayRegistLocation",
  cnfContentsWeatherUrlContractExecution: "#cnf_contentsWeatherUrlContractExecution",
  cnfContentsWeatherPushDisabled: "#cnf_contentsWeatherPushDisabled"
};
/**
 * viewContentsLeisureInfo画面の各イベントの宣言
 * @type object
 */
var contentsWeatherEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.cnfContentsWeatherRegistLocationClick();
    this.cnfContentsWeatherDisplayRegistLocationClick();
    this.cnfContentsWeatherContractExecutionClick();
    this.cnfContentsWeatherPushSettingClick();
    this.cnfContentsWeatherRainPushSettingClick();
    this.cnfContentsWeatherWarningPushSettingClick();
    this.cnfContentsWeatherAdvisoryPushSettingClick();
    this.cnfContentsWeatherThunderPushSettingClick();
    this.cnfContentsWeatherTyphoonPushSettingClick();
    this.cnfContentsWeatherEarthquakePushSettingClick();
    this.cnfContentsWeatherEruptionPushSettingClick();
  },

  /**
   * カードの表示のボタンスイッチONをクリックするイベント
   * @param {null}
   * @return {null}
   */
  contentsWeatherSwitchFunctionOn: function ()
  {
    if ($(contentsWeatherElement.cnfContentsWeatherPushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOn($(contentsWeatherElement.cnfContentsWeatherPushSetting));
      commonEvent.configPushSettingSwitchOn($(contentsWeatherElement.cnfContentsWeatherRainPushSetting));
      commonEvent.configPushSettingSwitchOn($(contentsWeatherElement.cnfContentsWeatherWarningPushSetting));
      commonEvent.configPushSettingSwitchOn($(contentsWeatherElement.cnfContentsWeatherAdvisoryPushSetting));
      commonEvent.configPushSettingSwitchOn($(contentsWeatherElement.cnfContentsWeatherThunderPushSetting));
      commonEvent.configPushSettingSwitchOn($(contentsWeatherElement.cnfContentsWeatherTyphoonPushSetting));
      commonEvent.configPushSettingSwitchOn($(contentsWeatherElement.cnfContentsWeatherEarthquakePushSetting));
      commonEvent.configPushSettingSwitchOn($(contentsWeatherElement.cnfContentsWeatherEruptionPushSetting));
    }
  },

  /**
   * カードの表示のボタンスイッチOFFをクリックするイベント
   * @param {null}
   * @return {null}
   */
  contentsWeatherSwitchFunctionOff: function ()
  {
    if ($(contentsWeatherElement.cnfContentsWeatherPushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOff($(contentsWeatherElement.cnfContentsWeatherPushSetting));
      commonEvent.configPushSettingSwitchOff($(contentsWeatherElement.cnfContentsWeatherRainPushSetting));
      commonEvent.configPushSettingSwitchOff($(contentsWeatherElement.cnfContentsWeatherWarningPushSetting));
      commonEvent.configPushSettingSwitchOff($(contentsWeatherElement.cnfContentsWeatherAdvisoryPushSetting));
      commonEvent.configPushSettingSwitchOff($(contentsWeatherElement.cnfContentsWeatherThunderPushSetting));
      commonEvent.configPushSettingSwitchOff($(contentsWeatherElement.cnfContentsWeatherTyphoonPushSetting));
      commonEvent.configPushSettingSwitchOff($(contentsWeatherElement.cnfContentsWeatherEarthquakePushSetting));
      commonEvent.configPushSettingSwitchOff($(contentsWeatherElement.cnfContentsWeatherEruptionPushSetting));
    }
  },

  /**
   * カードの表示のダイアログOKをクリックするイベント
   * @param {null}
   * @return {null}
   */
  contentsWeatherSwitchFunctionSave: function () {
    commonEvent.configPushSettingSwitchSave($(contentsWeatherElement.cnfContentsWeatherPushSetting));
    commonEvent.configPushSettingSwitchSave($(contentsWeatherElement.cnfContentsWeatherRainPushSetting));
    commonEvent.configPushSettingSwitchSave($(contentsWeatherElement.cnfContentsWeatherWarningPushSetting));
    commonEvent.configPushSettingSwitchSave($(contentsWeatherElement.cnfContentsWeatherAdvisoryPushSetting));
    commonEvent.configPushSettingSwitchSave($(contentsWeatherElement.cnfContentsWeatherThunderPushSetting));
    commonEvent.configPushSettingSwitchSave($(contentsWeatherElement.cnfContentsWeatherTyphoonPushSetting));
    commonEvent.configPushSettingSwitchSave($(contentsWeatherElement.cnfContentsWeatherEarthquakePushSetting));
    commonEvent.configPushSettingSwitchSave($(contentsWeatherElement.cnfContentsWeatherEruptionPushSetting));
  },

  /**
   * カードの表示のダイアログキャンセルをクリックするイベント
   * @param {null}
   * @return {null}
   */
  contentsWeatherSwitchFunctionRollback: function () {
    commonEvent.configPushSettingSwitchRollback($(contentsWeatherElement.cnfContentsWeatherPushSetting));
    commonEvent.configPushSettingSwitchRollback($(contentsWeatherElement.cnfContentsWeatherRainPushSetting));
    commonEvent.configPushSettingSwitchRollback($(contentsWeatherElement.cnfContentsWeatherWarningPushSetting));
    commonEvent.configPushSettingSwitchRollback($(contentsWeatherElement.cnfContentsWeatherAdvisoryPushSetting));
    commonEvent.configPushSettingSwitchRollback($(contentsWeatherElement.cnfContentsWeatherThunderPushSetting));
    commonEvent.configPushSettingSwitchRollback($(contentsWeatherElement.cnfContentsWeatherTyphoonPushSetting));
    commonEvent.configPushSettingSwitchRollback($(contentsWeatherElement.cnfContentsWeatherEarthquakePushSetting));
    commonEvent.configPushSettingSwitchRollback($(contentsWeatherElement.cnfContentsWeatherEruptionPushSetting));
  },

  /**
   * 登録地点をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherRegistLocationClick: function () {
    $(contentsWeatherElement.cnfContentsWeatherRegistLocation).on("click", function () {
      location.href = $(contentsWeatherElement.cnfContentsWeatherUrlRegistLocation).val();
    });
  },

  /**
   * 知るタブ表示カード地点をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherDisplayRegistLocationClick: function () {
    $(contentsWeatherElement.cnfContentsWeatherDisplayRegistLocation).on("click", function () {
      location.href = $(contentsWeatherElement.cnfContentsWeatherUrlDisplayRegistLocation).val();
    });
  },

  /**
   * 詳しくはコチラをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherContractExecutionClick: function () {
    $(contentsWeatherElement.cnfContentsWeatherContractExecution).on("click", function () {
      location.href = $(contentsWeatherElement.cnfContentsWeatherUrlContractExecution).val();
    });
  },

  /**
   * 天気のボタンスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherPushSettingClick: function () {
    $(contentsWeatherElement.cnfContentsWeatherPushSetting).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsWeatherElement.cnfContentsWeatherUrlUpdate).val();
      var url = urlUpdate + "&weatherPushSetting=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },

  /**
   * 雨ふる/やむのボタンスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherRainPushSettingClick: function () {
    $(contentsWeatherElement.cnfContentsWeatherRainPushSetting).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsWeatherElement.cnfContentsWeatherUrlUpdate).val();
      var url = urlUpdate + "&rainPushSetting=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },

  /**
   * 警報・注意報のボタンスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherWarningPushSettingClick: function () {
    $(contentsWeatherElement.cnfContentsWeatherWarningPushSetting).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsWeatherElement.cnfContentsWeatherUrlUpdate).val();
      var url = urlUpdate + "&warningPushSetting=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },

  /**
   * 注意報のボタンスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherAdvisoryPushSettingClick: function () {
    $(contentsWeatherElement.cnfContentsWeatherAdvisoryPushSetting).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsWeatherElement.cnfContentsWeatherUrlUpdate).val();
      var url = urlUpdate + "&advisoryPushSetting=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },

  /**
   * 雷のボタンスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherThunderPushSettingClick: function () {
    $(contentsWeatherElement.cnfContentsWeatherThunderPushSetting).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsWeatherElement.cnfContentsWeatherUrlUpdate).val();
      var url = urlUpdate + "&thunderPushSetting=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },

  /**
   * 台風のボタンスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherTyphoonPushSettingClick: function () {
    $(contentsWeatherElement.cnfContentsWeatherTyphoonPushSetting).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsWeatherElement.cnfContentsWeatherUrlUpdate).val();
      var url = urlUpdate + "&typhoonPushSetting=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },

  /**
   * 地震のボタンスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherEarthquakePushSettingClick: function () {
    $(contentsWeatherElement.cnfContentsWeatherEarthquakePushSetting).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsWeatherElement.cnfContentsWeatherUrlUpdate).val();
      var url = urlUpdate + "&earthquakePushSetting=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  },

  /**
   * 噴火のボタンスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfContentsWeatherEruptionPushSettingClick: function () {
    $(contentsWeatherElement.cnfContentsWeatherEruptionPushSetting).on("click", function () {
      var $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(contentsWeatherElement.cnfContentsWeatherUrlUpdate).val();
      var url = urlUpdate + "&eruptionPushSetting=" + Number($switch.prop('checked'));
      commonEvent.configCommonWriteLogSwitch($switch);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  }
};
//</editor-fold>
/**
 * deletePointSelectのjs
 */
//<editor-fold defaultstate="collapsed" desc="deletePointSelect">
/**
 * viewDeletePointSelect画面の各要素の宣言
 * @type object
 */
var deletePointSelectElement = {
  cnfUniqueKey: "#cnf_deletePoint_uniqueKey",
  cnfHomeStation: "#cnf_deletePoint_homeStation",
  cnfTrainId: "#cnf_deletePoint_trainId",
  cnfRoadSetting: "#cnf_deletePoint_roadSetting",
  cnfDeletePointForm: "#cnf_deletePoint_form",
  cnfSettingBtn: "#cnf_deletePoint_settingBtn",
  cnfSelectBtn: "#cnf_deletePoint_selectBtn",
  cnfCancelBtn: "#cnf_deletePoint_cancelBtn",
  cnfViewId: "#cnf_deletePoint_viewId",
  cnfUrlDeletePoint: "#cnf_deletePoint_urlDeletePoint",
  cnfKind: "#cnf_deletePoint_kind",
  cnfListScrollCheckboxes : '.deletePoint input:checkbox',
  cnfListScrollCheckboxesChecked : '.deletePoint input:checkbox:checked'

};
/**
 * viewDeletePointSelect画面の各イベントの宣言
 * @type object
 */
var deletePointSelectEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.settingBtnClick();
    this.selectAllBtnClick();
    this.cancelAllBtnClick();
    this.readyOnload();
  },

  /**
   * 選択された地点は知るタブ表示カードで利用中です。のチェックボックスを除いて、全てのチェックボックスにチェックを付ける
   * 設定ボタンを有効に設定
   * @param {null}
   * @return {null}
   */
  selectAllBtnClick: function () {
    $(deletePointSelectElement.cnfSelectBtn).on("click", function () {
      $(deletePointSelectElement.cnfListScrollCheckboxes).prop('checked', true);
      var cnfDeletePointUniqueKeyId = '#cnf_deletePoint_uniqueKey' + $('#cnf_deletePoint_uniqueKey').val();
      $(cnfDeletePointUniqueKeyId).prop('checked', false);
      var activedChkBoxArr = $(deletePointSelectElement.cnfListScrollCheckboxesChecked);
      if (activedChkBoxArr.length > 0) {
        $(deletePointSelectElement.cnfSettingBtn).prop('disabled', false).removeClass('cnf_disabled_fontLGray');
      }
    });
  },

  /**
   * 全部チェックボックスにチェックを外す
   * 設定ボタンを無効に設定
   * @param {null}
   * @return {null}
   */
  cancelAllBtnClick: function () {
    $(deletePointSelectElement.cnfCancelBtn).on("click", function () {
      $(deletePointSelectElement.cnfListScrollCheckboxes).prop('checked', false);
      $(deletePointSelectElement.cnfSettingBtn).prop('disabled', true).addClass('cnf_disabled_fontLGray');
    });
  },

  /**
   * 必要データを取得・サーバへ返却
   * @param {null}
   * @return {null}
   */
  settingBtnClick: function () {
    $(deletePointSelectElement.cnfSettingBtn).on("click", function () {
      loadingStart();
      var kind = $(deletePointSelectElement.cnfKind).val();
      var settingValue = $(deletePointSelectElement.cnfListScrollCheckboxesChecked).map(function () {
        return $(this).val();
      }).get();
      // S-3-2-2-30 削除地点選択画面
      if (kind === CNF_SCR_KND_WEATHER_ADDRESS) {
        $(deletePointSelectElement.cnfUniqueKey).val(settingValue);
      // S-3-3-2-20 削除駅選択画面
      } else if (kind === CNF_SCR_KND_HOME_STATION) {
        $(deletePointSelectElement.cnfHomeStation).val(settingValue);
      // S-3-3-3-20 削除路線選択画面
      } else if (kind === CNF_SCR_KND_USE_ROUTE) {
        $(deletePointSelectElement.cnfTrainId).val(settingValue);
      // S-3-3-4-60 削除道路選択画面
      } else if (kind === CNF_SCR_KND_USE_ROAD) {
        $(deletePointSelectElement.cnfRoadSetting).val(settingValue);
      }
      $(deletePointSelectElement.cnfDeletePointForm).closest('form').submit();
    });
  },

  /**
   * ビューページをロードする時に必要データ・イベントを初期化
   * @param {null}
   * @return {null}
   */
  readyOnload: function () {
    $(deletePointSelectElement.cnfSettingBtn).prop('disabled', true).addClass('cnf_disabled_fontLGray');
    $(deletePointSelectElement.cnfSettingBtn).removeClass('cnf_hidden');
    var cnfDeletePointUniqueKeyId = '#cnf_deletePoint_uniqueKey' + $('#cnf_deletePoint_uniqueKey').val();
    // 選択された地点は知るタブ表示カードで利用中です。のチェックボックスにチェックを付ける場合、ダイアログを表示
    $(cnfDeletePointUniqueKeyId).on("click", function () {
      if (this.checked) {
        $("#config_info_dialog0").show(0, function () {
          var scrollpos = $(window).scrollTop();
          $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
        });
        $(this).prop('checked', false);
      } else {
        $('#config_info_dialog0').hide();
      }
    });

    // チェックボックスが何でもチェックを付ける・付けない場合、設定ボタンを有効・無効に設定
    $(deletePointSelectElement.cnfListScrollCheckboxes).on("change", function () {
      var activedChkBoxArr = $(deletePointSelectElement.cnfListScrollCheckboxesChecked);
      if (activedChkBoxArr.length === 0) {
        $(deletePointSelectElement.cnfSettingBtn).prop('disabled', true).addClass('cnf_disabled_fontLGray');
      } else {
        $(deletePointSelectElement.cnfSettingBtn).prop('disabled', false).removeClass('cnf_disabled_fontLGray');
      }
    });
  }
};
//</editor-fold>
/**
 * 駅設定画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="homeStation">
/**
 * 駅設定画面の各要素の宣言
 * @type object
 */
var countStation;
var urlViewSearchHomeStation;
var urlDeletePoint;
var homeStationElement = {
  countStation: "#countStation",
  rowAddStation: ".row_addStation",
  rowRemoveStation: ".row_removeStation",
  urlViewSearchHomeStation: "#urlViewSearchHomeStation",
  urlDeletePoint: "#urlDeletePoint"
};

/**
 * 駅設定画面の各イベントの宣言
 * @type object
 */
var homeStationEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.getCountStation();
    this.gotoAddStationScreen();
    this.gotoRemoveStationScreen();
  },

  /**
   * 最寄駅数量取得の処理
   * 駅選択画面[S-3-3-2-10]のURL取得
   * 削除駅選択画面[S-3-3-2-20]のURL取得
   * @param {null}
   * @return {null}
   */
  getCountStation: function () {
    countStation = $(homeStationElement.countStation).val();
    urlViewSearchHomeStation = $(homeStationElement.urlViewSearchHomeStation).val();
    urlDeletePoint = $(homeStationElement.urlDeletePoint).val();
  },

  /**
   * 駅設定画面での[駅追加]ボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  gotoAddStationScreen: function () {
    $(homeStationElement.rowAddStation).on("click", function () {
      if (countStation >= STATION_MAX_ARRAY)
      {
        return;
      } else
      {
        // 駅選択画面[S-3-3-2-10]
        location.href = urlViewSearchHomeStation;
      }
    });
  },

  /**
   * 駅設定画面での[駅削除]ボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  gotoRemoveStationScreen: function () {
    $(homeStationElement.rowRemoveStation).on("click", function () {
      if (countStation == NO_REGIST_POINT_SETING)
      {
        return;
      } else
      {
        // 削除駅選択画面[S-3-3-2-20]
        location.href = urlDeletePoint;
      }
    });
  }
};
//</editor-fold>
/**
 * インフォメーション画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="information">
/**
 * インフォメーション画面の各要素の宣言
 * @type object
 */
var informationElement = {
  configReceive: ".config_receive",
  configTimeRejectReceive: ".config_timeRejectReceive",
  urlViewRadio: "#urlViewRadio",
  urlViewRejectTime: "#urlViewRejectTime"
};

/**
 * インフォメーション画面の各イベントの宣言
 * @type object
 */
var informationEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.gotoReceiveScreen();
    this.gotoSettingTimeRejectRevScreen();
  },

  /**
   * インフォメーション画面での[一括受信]項目をクリックする時の処理
   * @param {null}
   * @return {null}
   */
  gotoReceiveScreen: function () {
    $(informationElement.configReceive).on("click", function () {
      location.href = $(informationElement.urlViewRadio).val();
    });
  },

  /**
   * インフォメーション画面での[受信拒否時間帯設定]項目をクリックする時の処理
   * @param {null}
   * @return {null}
   */
  gotoSettingTimeRejectRevScreen: function () {
    $(informationElement.configTimeRejectReceive).on("click", function () {
      location.href = $(informationElement.urlViewRejectTime).val();
    });
  }
};
//</editor-fold>
/**
 * 受信拒否時間帯画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="informationRejectTime">
/**
 * viewInformationRejectTime画面の各要素の宣言
 * @type object
 */
var informationRejectTimeElement = {
  informationRejectTimeSwitch: "#informationRejectTime_switch",
  informationRejectTimeItem: "#informationRejectTime_item",
  urlUpdateInformationRejectTime: "#urlUpdateInformationRejectTime",
  cnfInfomationRejectTimeText: ".cnf_InfomationRejectTimeText",
  viewId: "#viewId"
};
/**
 * viewInformationRejectTime画面の各イベントの宣言
 * @type object
 */
var informationRejectTimeEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.informationRejectTimeSwitchClick();
  },

  /**
   * 受信拒否時間帯設定のスイッチをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  informationRejectTimeSwitchClick: function () {
    $(informationRejectTimeElement.informationRejectTimeSwitch).on("click", function () {
      $switch = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $(informationRejectTimeElement.urlUpdateInformationRejectTime).val();
      var url = urlUpdate + "&rejectTime=" + Number($switch.prop('checked'));

	  // タップログ
      commonEvent.configCommonWriteLogSwitch($switch);

	  // 受信拒否時間帯設定
      commonEvent.configCommonSwitchAjax(url, TIMERANGE_DIALOG_TYPE, $switch);
    });
  }
};
//</editor-fold>
/**
 * パートナー画面のjs
 *
 * パートナー画面の処理全部
 */
//<editor-fold defaultstate="collapsed" desc="partners">
/**
 * Elementのインスタンス生成
 *
 * @type object
 */
var partnersElement = {
  cnfPartnersAddPartner: ".cnf_partners_addPartner",
  cnfPartnersUrlList: "#cnf_partners_urlList"
};

/**
 * Eventのインスタンス生成
 *
 * @type object
 */
var partnersEvent = {
  /**
   * コンストラクタ
   *
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.cnfPartnersAddPartnerClick();
  },

  /**
   * パートナーのパートナー追加イベント
   *
   * @param {null}
   * @return {null}
   */
  cnfPartnersAddPartnerClick: function () {
    $(partnersElement.cnfPartnersAddPartner).on("click", function () {
      var url = $(partnersElement.cnfPartnersUrlList).val();
      location.href = url;
    });
  }
};
//</editor-fold>
/**
 * パートナー別設定画面のjs
 *
 * パートナー別設定画面の処理全部
 */
//<editor-fold defaultstate="collapsed" desc="partner">
/**
 * Elementのインスタンス生成
 *
 * @type object
 */
var partnerElement = {
  configRow: ".config_row",
  partnerPushSetting: "#partner_pushSetting",
  partnerDeleteFlow: "#partner_deleteFlow",
  partnerUrlList: "#partner_urlList",
  partnerViewId: "#partner_viewId",
  partnerPartnerId: "#partner_partnerId",
  partnerPushSettingCheckbox: "#partner_pushSettingCheckbox",
  partnerPushDisabled: "#partner_pushDisabled"
};

/**
 * Eventのインスタンス生成
 *
 * @type object
 */
var partnerEvent = {
  /**
   * コンストラクタ
   *
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.partnerPushSettingClick();
  },

  /**
   * パートナー別設定のカードの表示SwitchのOnイベント
   *
   * @param {null}
   * @return {null}
   */
  partnerSwitchFunctionOn: function () {
    if ($(partnerElement.partnerPushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOn($(partnerElement.partnerPushSettingCheckbox));
    }
  },

  /**
   * パートナー別設定のカードの表示SwitchのOFFイベント
   *
   * @param {null}
   * @return {null}
   */
  partnerSwitchFunctionOff: function () {
    if ($(partnerElement.partnerPushDisabled).val() !== '1') {
      commonEvent.configPushSettingSwitchOff($(partnerElement.partnerPushSettingCheckbox));
    }
  },

  /**
   * パートナー別設定のカードの表示SwitchのステータスをSaveイベント
   *
   * @param {null}
   * @return {null}
   */
  partnerSwitchFunctionSave: function () {
    commonEvent.configPushSettingSwitchSave($(partnerElement.partnerPushSettingCheckbox));
  },

  /**
   * パートナー別設定のカードの表示SwitchのステータスをRollbackイベント
   *
   * @param {null}
   * @return {null}
   */
  partnerSwitchFunctionRollback: function () {
    commonEvent.configPushSettingSwitchRollback($(partnerElement.partnerPushSettingCheckbox));
  },

  /**
   * パートナー別設定のPush設定SwitchのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  partnerPushSettingClick: function () {
    $(partnerElement.partnerPushSettingCheckbox).on("click", function () {
      var $switch = $(this);
      // 共通アクセスログに書き込みを呼び出す。
      commonEvent.configCommonWriteLogSwitch($switch);
      // 共通画面ロック処理を呼び出す。
      commonEvent.configCommonDisableScreen();
      var partnerId = $(partnerElement.partnerPartnerId).val();
      var urlUpdate = $(partnerElement.partnerUrlList).val();
      var url = urlUpdate + "&partnerId=" + partnerId + "&pushSetting=" + Number($switch.prop('checked'));
      // 変更のajax通信処理を呼び出す。
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $switch);
    });
  }
};
//</editor-fold>
/**
 * 地点索引画面表示のjs
 */
//<editor-fold defaultstate="collapsed" desc="pointIndex">
/**
 * pointIndex画面の各要素の宣言
 * @type object
 */
var pointIndexElement = {
  cnfPointIndexUrl: "#cnf_pointIndexUrl",
  cnfPointIndexRoadUrl: "#cnf_pointIndexRoadUrl",
  cnfPointIndex: ".cnf_pointIndex",
  cnfPointIndexRoad: ".cnf_pointIndexRoad",
  cnfPointIndexCount: "#cnf_pointIndexCount",
  cnfPointIndexCode: "#cnf_pointIndexCode",
  cnfPointIndexWeatherSettingAddress: ".cnf_pointIndexWeatherSettingAddress",
  cnfPointIndexCodeLatLon: "#cnf_pointIndexCodeLatLon"
};
/**
 * pointIndex画面の各イベントの宣言
 * @type object
 */
var pointIndexEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    showDialog();
    this.cnfPointIndexClick();
    this.cnfPointIndexRoadClick();
    this.cnfPointIndexWeatherSettingAddressClick();
  },

  /**
   * リストグループ部（A）のタグをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfPointIndexClick: function () {
    $(pointIndexElement.cnfPointIndex).on("click", function () {
      if ($(this).find(pointIndexElement.cnfPointIndexCount).val() !== '0') {
        location.href = $(pointIndexElement.cnfPointIndexUrl).val()
                + "&"
                + $(this).find(pointIndexElement.cnfPointIndexCode).val();
      }
    });
  },

  /**
   * リストグループ部（B）のタグをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfPointIndexRoadClick: function () {
    $(pointIndexElement.cnfPointIndexRoad).on("click", function () {
      if ($(this).find(pointIndexElement.cnfPointIndexCount).val() !== '0') {
        location.href = $(pointIndexElement.cnfPointIndexRoadUrl).val()
                + "&"
                + $(this).find(pointIndexElement.cnfPointIndexCode).val();
      }
    });
  },

  /**
   * この住所を設定をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfPointIndexWeatherSettingAddressClick: function () {
    $(pointIndexElement.cnfPointIndexWeatherSettingAddress).on("click", function () {
      loadingStart();
      location.href = $(pointIndexElement.cnfPointIndexRoadUrl).val()
              + $(pointIndexElement.cnfPointIndexCodeLatLon).val();
    });
  }
};
//</editor-fold>
/**
 * 地点選択画面のjs
 *
 * 地点選択画面の処理全部
 */
//<editor-fold defaultstate="collapsed" desc="pointSelect">
/**
 * Elementのインスタンス生成
 * @type object
 */
var updateParam;
var pointSelectElement = {
  cnfPointSelectDialog: "#config_info_dialog0",
  cnfPointSelectKind: "#cnf_pointSelect_kind",
  cnfPointSelectViewId: "#cnf_pointSelect_viewId",
  cnfPointSelectCodeLength: "#cnf_pointSelect_codeLength",
  cnfPointSelectUrlList: "#cnf_pointSelect_urlList",
  cnfPointSelectItem: ".cnf_pointSelectItem",
  cnfPointSelectRow: ".cnf_pointSelectRow",
  cnfPointSelectChomeCode: ".cnf_pointSelectChomeCode",
  cnfPointSelectCode: "#cnf_pointSelect_Code",
  cnfPointSelectLat: ".cnf_pointSelectLat",
  cnfPointSelectLon: ".cnf_pointSelectLon",
  cnfPointSelectRoadRow: ".cnf_pointSelect_roadRow",
  cnfPointSelectStation: ".cnf_pointSelect_station",
  cnfPointSelectStationCode: ".cnf_pointSelect_stationCode",
  cnfPointSelectWeatherSettingAddress: ".cnf_pointSelect_weatherSettingAddress",
  cnfPointSelectWeatherFacillity: ".cnf_pointSelect_weatherFacillity",
  cnfPointSelectNationalRoad: ".cnf_pointSelect_nationalRoad",
  cnfPointSelectGeneralRoad: ".cnf_pointSelect_generalRoad",
  cnfPointSelectHighwayPrefRow: ".cnf_pointSelect_highwayPref_row",
  cnfPointSelectHighwayRoadRow: ".cnf_pointSelect_highwayRoad_row",
  cnfPointSelectHighwayTollRoadRow: ".cnf_pointSelect_highwayTollRoad_row",
  cnfPointSelectFacilityLat: ".cnf_pointSelect_facilityLat",
  cnfPointSelectFacilityLon: ".cnf_pointSelect_facilityLon"
};

/**
 * Eventのインスタンス生成
 *
 * @type object
 */
var pointSelectEvent = {

  /**
   * コンストラクタ
   *
   * @param {null}
   * @return {null}
   */
  init: function ()
  {
    showDialog();
    this.cnfPointSelectRowClick();
    this.cnfPointSelectStationClick();
    this.cnfPointSelectWeatherSettingAddressClick();
    this.cnfPointSelectWeatherFacillityClick();
    this.cnfPointSelectNationalRoadClick();
    this.cnfPointSelectGeneralRoadClick();
    this.cnfPointSelectRoadRowClick();
    this.cnfPointSelectHighwayPrefRowClick();
    this.cnfPointSelectHighwayRoadRowClick();
    this.cnfPointSelectHighwayTollRoadRowClick();
  },

  /**
   * 地点選択一覧のアイテムのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  cnfPointSelectRowClick: function ()
  {
    $(pointSelectElement.cnfPointSelectRow).on("click", function () {
      // Elementの値を取得する。
      var $row = $(this);
      var url = $(pointSelectElement.cnfPointSelectUrlList).val();
      var codeLength = parseInt($(pointSelectElement.cnfPointSelectCodeLength).val());
      var lat = $row.find(pointSelectElement.cnfPointSelectLat).val();
      var lon = $row.find(pointSelectElement.cnfPointSelectLon).val();
      var code = $row.find(pointSelectElement.cnfPointSelectItem).attr("data-id");

      // 検索の値・コッドをチェック
      if (codeLength !== 0) {

        // コッドの長さをチェック
        switch (codeLength) {
          // 地域コードの場合
          case CNF_AREA_CODE_LENGTH:
            location.href = url + "&code=" + code;
            break;
          
          // 都道府県コードの場合
          case CNF_PREF_CODE_LENGTH:
            location.href = url + "&code=" + code + "&lat=" + lat + "&lon=" + lon;
            break;

          // 市区町村コードの場合
          case CNF_CITY_CODE_LENGTH:
            location.href = url.split(",")[0] + "&" + $row.find(pointSelectElement.cnfPointSelectChomeCode).val();
            break;

          // 大字コードの場合
          case CNF_SECTION_OF_VILLAGE_CODE_LENGTH:
            redirectChomeScreen(lat, lon);
            break;

        }
      } else
      {
        redirectChomeScreen(lat, lon);
      }
    });
  },

  /**
   * 駅一覧のアイテムのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  cnfPointSelectStationClick: function ()
  {
    $(pointSelectElement.cnfPointSelectStation).on("click", function () {
      loadingStart();
      location.href = $(pointSelectElement.cnfPointSelectUrlList).val() + "&"
      + $(this).find(pointSelectElement.cnfPointSelectStationCode).val();
    });
  },

  /**
   * 天気設定一覧のアイテムのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  cnfPointSelectWeatherSettingAddressClick: function ()
  {
    $(pointSelectElement.cnfPointSelectWeatherSettingAddress).on("click", function () {
      loadingStart();
      var search = getParam("search");
      var paramSearch = (search) ? "&search=" + search : "";
      var index = getParam("index");
      var paramIndex = (index) ? "&index=" + index : "";
      var url = $(pointSelectElement.cnfPointSelectUrlList).val();
      location.href = url.split(",")[1] + $(pointSelectElement.cnfPointSelectCode).val() + paramSearch + paramIndex;
    });
  },

  /**
   * 施設一覧のアイテムのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  cnfPointSelectWeatherFacillityClick: function ()
  {
    $(pointSelectElement.cnfPointSelectWeatherFacillity).on("click", function () {
      loadingStart();
      var url = $(pointSelectElement.cnfPointSelectUrlList).val();
      var code = $(this).find("a").attr("data-id");
      var lat = $(this).find(pointSelectElement.cnfPointSelectFacilityLat).val();
      var lon = $(this).find(pointSelectElement.cnfPointSelectFacilityLon).val();
      var search = getParam("search");
      location.href = url + "&code=" + code + "&lat=" + lat + "&lon=" + lon + "&search=" + encodeURIComponent(search);
    });
  },

  /**
   * 国道一覧のアイテムのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  cnfPointSelectNationalRoadClick: function ()
  {
    $(pointSelectElement.cnfPointSelectNationalRoad).on("click", function () {
      var nationalRoadCode = $(this).find(pointSelectElement.cnfPointSelectItem).attr("data-id");
      var url = $(pointSelectElement.cnfPointSelectUrlList).val();
      location.href = url.split(",")[0] + "&" + nationalRoadCode;
    });
  },

  /**
   * 一般道路一覧のアイテムのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  cnfPointSelectGeneralRoadClick: function ()
  {
    $(pointSelectElement.cnfPointSelectGeneralRoad).on("click", function () {
      var generalRoadCode = $(this).find(pointSelectElement.cnfPointSelectItem).attr("data-id");
      var url = $(pointSelectElement.cnfPointSelectUrlList).val();
      location.href = url.split(",")[0] + "&" + generalRoadCode;
    });
  },

  /**
   * 道路一覧のアイテムのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  cnfPointSelectRoadRowClick: function ()
  {
    $(pointSelectElement.cnfPointSelectRoadRow).on("click", function () {
      var code = $(this).find(pointSelectElement.cnfPointSelectItem).attr("data-id");
      var url = $(pointSelectElement.cnfPointSelectUrlList).val();
      location.href = url + "&" + code;
    });
  },

  /**
   * 高速・有料道路の都道府県一覧のアイテムのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  cnfPointSelectHighwayPrefRowClick: function ()
  {
    $(pointSelectElement.cnfPointSelectHighwayPrefRow).on("click", function () {
      var code = $(this).find(pointSelectElement.cnfPointSelectItem).attr("data-id");
      var url = $(pointSelectElement.cnfPointSelectUrlList).val();
      location.href = url.split(",")[0] + code;
    });
  },

  /**
   * 高速・有料道路のアイテムのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  cnfPointSelectHighwayTollRoadRowClick: function ()
  {
    $(pointSelectElement.cnfPointSelectHighwayTollRoadRow).on("click", function () {
      var code = $(this).find(pointSelectElement.cnfPointSelectItem).attr("data-id");
      var url = $(pointSelectElement.cnfPointSelectUrlList).val();
      location.href = url.split(",")[1] + "&code=" + code;
    });
  },

  /**
   * 道路のアイテムのClickイベント
   *
   * @param {null}
   * @return {null}
   */
  cnfPointSelectHighwayRoadRowClick: function ()
  {
    $(pointSelectElement.cnfPointSelectHighwayRoadRow).on("click", function () {
      var code = $(this).find(pointSelectElement.cnfPointSelectItem).attr("data-id");
      location.href = "viewPointsSelect?wv=1&kind=10&code=" + code;
    });
  }
};

/**
 * リダイレクトURLイベント
 *
 * @param {string} lat 緯度
 * @param {string} lon 経度
 * @return {null}
 */
function redirectChomeScreen(lat, lon)
{
  updateParam = "&lat=" + lat + "&lon=" + lon;
  var url = $(pointSelectElement.cnfPointSelectUrlList).val();
  var kind = $(pointSelectElement.cnfPointSelectKind).val();
  if (kind === CNF_SCR_KND_USER_AREA) {
    commonEvent.configCommonDisableScreen();
    $.ajax({
      type: "POST",
      url: url.split(",")[0] + updateParam,
      timeout: 10000,
      success: function (value) {
        if (!commonEvent.configCommonShowError(value, NONE_TYPE)) {
          $(pointSelectElement.cnfPointSelectDialog).show(0, function () {
              var scrollpos = $(window).scrollTop();
              $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
            });
        }
      },
      error: function () {
        commonEvent.configCommonShowError(JSON_ERROR, NONE_TYPE);
      }
    });
  } else if (kind === CNF_SCR_KND_OFFICE_ADDRESS || kind === CNF_SCR_KND_WEATHER_ADDRESS) {
    location.href = url.split(",")[0] + updateParam;
  }
}
//</editor-fold>
/**
 * 地点選択(地図)画面表示のjs
 */
//<editor-fold defaultstate="collapsed" desc="pointSelectMap">
/**
 * pointSelectMap画面の各要素の宣言
 * @type object
 */
var map, msg = [];
var pointSelectMapElement = {
  cnfViewPointSelectMapLat: "#cnf_viewPointSelectMapLat",
  cnfViewPointSelectMapLon: "#cnf_viewPointSelectMapLon",
  cnfViewPointSelectMapView: "#cnf_viewPointSelectMapView",
  cnfViewPointSelectMapUpdate: "#cnf_viewPointSelectMapUpdate",
  cnfViewPointSelectMapUrlUpdate: "#cnf_viewPointSelectMapUrlUpdate",
  cnfViewPointSelectMapUrlView: "#cnf_viewPointSelectMapUrlView",
  cnfViewPointSelectMapUrlViewAjax: "#cnf_viewPointSelectMapUrlViewAjax",
  cnfViewPointSelectMapAddress: "#cnf_viewPointSelectMapAddress",
  cnfViewPointSelectMapInitDisplay: "#cnf_viewPointSelectMapInitDisplay"
};
/**
 * pointSelectMap画面の各イベントの宣言
 * @type object
 */
var pointSelectMapEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    showDialog()
    this.cnfViewPointSelectMapViewClick();
    this.cnfViewPointSelectMapUpdateClick();
  },

  /**
   * キャンセルボタンをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfViewPointSelectMapViewClick: function () {
    $(pointSelectMapElement.cnfViewPointSelectMapView).on("click", function () {
      location.href = $(pointSelectMapElement.cnfViewPointSelectMapUrlView).val();
    });
  },

  /**
   * 設定ボタンをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfViewPointSelectMapUpdateClick: function () {
    $(pointSelectMapElement.cnfViewPointSelectMapUpdate).on("click", function () {
      loadingStart();
      location.href = $(pointSelectMapElement.cnfViewPointSelectMapUrlUpdate).val()
              + "&latitude="
              + $(pointSelectMapElement.cnfViewPointSelectMapLat).val()
              + "&longitude="
              + $(pointSelectMapElement.cnfViewPointSelectMapLon).val()
              + "&initDisplay="
              + $(pointSelectMapElement.cnfViewPointSelectMapInitDisplay).val();
    });
  }
};

/**
 * 地図の初期化
 * @param {null}
 * @return {null}
 */
function loadMap() {
  var margin = 0;
  var hHeight = $('.m_header').height();
  var hFooter = $('.m_footer').height() + margin;
  var cHeight = $(window).height() - hHeight - hFooter;
  $('.m_content').css({top: hHeight + 'px', bottom: hFooter + 'px', 'height': cHeight + 'px'});
  $('#ZMap').css({'height': cHeight + 'px'});
  var latlon = ZDC.wgsTotky(new ZDC.LatLon($(pointSelectMapElement.cnfViewPointSelectMapLat).val(),
          $(pointSelectMapElement.cnfViewPointSelectMapLon).val()));

  map = new ZDC.Map(document.getElementById('ZMap'), {
    latlon: latlon,
    zoom: 1,
    mapType: ZDC.MAPTYPE_FLAT_COLOR,
    zoomRange: [12, 13, 14, 15, 16, 17, 18]
  });

  msg = new ZDC.MsgInfo(latlon, {offset: ZDC.Pixel(0, -18)});
  map.addWidget(msg);

  var scale = new ZDC.ScaleBar();
  map.addWidget(scale);

  var center = new ZDC.MapCenter();
  map.addWidget(center);

  // 拡大ボタンを作成
  var plus = new ZDC.StaticUserWidget(
          {
            bottom: 90, right: 10
          },
          {
            html: '<div class="zoom-in" ></div>',
            size: new ZDC.WH(48, 48)
          }
  );

  // 拡大ボタンを追加
  map.addWidget(plus);
  plus.open();

  // 縮小ボタンを作成
  var minus = new ZDC.StaticUserWidget(
          {
            bottom: 40, right: 10
          },
          {
            html: '<div class="zoom-out" ></div>',
            size: new ZDC.WH(48, 48)
          }
  );

  // 縮小ボタンを追加
  map.addWidget(minus);
  minus.open();

  // 拡大ボタンをクリックしたときの動作
  ZDC.addListener(plus, ZDC.STATICUSERWIDGET_MOUSEDOWN, function () {
    map.zoomIn();
  });

  // 縮小ボタンをクリックしたときの動作
  ZDC.addListener(minus, ZDC.STATICUSERWIDGET_MOUSEDOWN, function () {
    map.zoomOut();
  });

  // 地図のドラッグを終了したときの動作
  ZDC.addListener(map, ZDC.MAP_DRAG_END, getMapCenter);
}

/**
 * 地図を移動する時地図中心の住所をロード
 * @param {null}
 * @return {null}
 */
function getMapCenter() {
  var latlon = ZDC.tkyTowgs(map.getLatLon());
  $(pointSelectMapElement.cnfViewPointSelectMapLat).val(latlon.lat);
  $(pointSelectMapElement.cnfViewPointSelectMapLon).val(latlon.lon);
  commonEvent.configCommonDisableScreen();
  $('.modal').addClass('modal_loading');
  $.ajax({
    type: "POST",
    url: $(pointSelectMapElement.cnfViewPointSelectMapUrlViewAjax).val() + '&lat=' + latlon.lat + '&lon=' + latlon.lon,
    timeout: 10000,
    success: function (value) {
      if (!commonEvent.configCommonShowError(value, NONE_TYPE)) {
        if (value['addressName'] === null || value['addressName'] === '') {
          $(pointSelectMapElement.cnfViewPointSelectMapAddress).html('&nbsp;');
          $(pointSelectMapElement.cnfViewPointSelectMapUpdate).prop('disabled', true).addClass('cnf_disabled_fontLGray');
        } else {
          $(pointSelectMapElement.cnfViewPointSelectMapAddress).text(value['addressName']);
          $(pointSelectMapElement.cnfViewPointSelectMapInitDisplay).val('false');
          $(pointSelectMapElement.cnfViewPointSelectMapUpdate).prop('disabled', false).removeClass('cnf_disabled_fontLGray');
        }
      }
    },
    error: function () {
      commonEvent.configCommonShowError(JSON_ERROR, NONE_TYPE);
    },
    complete: function() {
      $('.modal').removeClass('modal_loading');
    }
  });
}

//</editor-fold>
/**
 * 画面 
 */
//<editor-fold defaultstate="collapsed" desc="pointSetting">
/**
 * 天気・気象登録地点設定画面の各要素の宣言
 * @type object
 */
var registAddressCount;
var pointSettingElement = {
  registAddressCount: "#registAddressCount",
  pointSettingAddPointAddress: "#pointSetting_addPointAddress",
  pointSettingAddPointFacility: "#pointSetting_addPointFacility",
  pointSettingDeletePoint: "#pointSetting_deletePoint",
  urlViewSearchWeatherAddress: "#urlViewSearchWeatherAddress",
  urlViewSearchWeatherFacility: "#urlViewSearchWeatherFacility",
  urlViewDeletePoint: "#urlViewDeletePoint"
};

/**
 * 天気・気象登録地点設定画面の各イベントの宣言
 * @type object
 */
var pointSettingEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.getValueFromView();
    this.pointSettingAddPointAddressClick();
    this.pointSettingAddPointFacilityClick();
    this.pointSettingDeletePointClick();
  },
  
  /**
   * 登録地点数量取得の処理
   * @param {null}
   * @return {null}
   */
  getValueFromView: function () {
    registAddressCount = $(pointSettingElement.registAddressCount).val();
  },

  /**
   * 天気・気象登録地点設定画面での[地点追加（住所から）]ボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  pointSettingAddPointAddressClick: function () {
    $(pointSettingElement.pointSettingAddPointAddress).on("click", function () {
      if (registAddressCount >= MAX_VALUE_POINT_SETING) {
        return;
      } else {
        location.href = $(pointSettingElement.urlViewSearchWeatherAddress).val();
      }
    });
  },

  /**
   * 天気・気象登録地点設定画面での[地点追加（施設から）]ボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  pointSettingAddPointFacilityClick: function () {
    $(pointSettingElement.pointSettingAddPointFacility).on("click", function () {
      if (registAddressCount >= MAX_VALUE_POINT_SETING) {
        return;
      } else {
        location.href = $(pointSettingElement.urlViewSearchWeatherFacility).val();
      }
    });
  },

  /**
   * 天気・気象登録地点設定画面での[地点削除]ボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  pointSettingDeletePointClick: function () {
    $(pointSettingElement.pointSettingDeletePoint).on("click", function () {
      if (registAddressCount == NO_REGIST_POINT_SETING) {
        return;
      } else {
        location.href = $(pointSettingElement.urlViewDeletePoint).val();
      }
    });
  }
};
//</editor-fold>
/**
 * 地点選択画面（複数）のjs
 */
//<editor-fold defaultstate="collapsed" desc="pointsSelect">
/**
 * pointsSelect画面の各要素の宣言
 * @type object
 */
var pointsSelectElement = {
  cnfPointsSelectCancelBtn: '#cnf_pointsSelectCancelBtn',
  cnfRedirectUrlPoints: '#cnf_pointsSelects input[name=cnf_redirectUrlPoints]',
  cnfPointsSelectForm: "#cnf_pointsSelect_form",
  cnfPointsSelectSettingBtn: '#cnf_pointsSelectSettingBtn',
  cnfPointsSelectListCheckbox : '#cnf_pointsSelectList input:checkbox',
  cnfKindPointsSelect : '#cnf_pointsSelects input[name=cnf_kindPoints]',
  cnfCountPointsSelect : '#cnf_pointsSelects input[name=cnf_countPoints]'
};
/**
 * pointsSelect画面の各イベントの宣言
 * @type object
 */
var pointsSelectEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.cnfPointsSelectSettingBtnClick();
    this.cnfPointsSelectReadyOnLoad();
    this.cnfPointsSelectCancelBtnClick();
    this.readyOnLoad();
  },
  readyOnLoad: function ()
  {
    var url   = location.href;
    parameters    = url.split("?");
    params   = parameters[1].split("&");
    var paramsArray = [];
    for ( i = 0; i < params.length; i++ ) {
      neet = params[i].split("=");
      paramsArray.push(neet[0]);
      paramsArray[neet[0]] = neet[1];
    }
    if (paramsArray["dialogType"]) {
      var selector = "#config_info_dialog" + paramsArray["dialogType"];
      $(selector).show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    }
  },
  /**
   * 必要データを取得・サーバへ返却
   * @param {null}
   * @return {null}
   */
  cnfPointsSelectSettingBtnClick: function () {
    $(pointsSelectElement.cnfPointsSelectSettingBtn).on("click", function () {
      loadingStart();
      $(pointsSelectElement.cnfPointsSelectForm).closest('form').submit();
    });
  },
  /**
   * キャンセルのクリックのイベント
   * @param {null}
   * @return {null}
   */
  cnfPointsSelectCancelBtnClick: function () {
    $(pointsSelectElement.cnfPointsSelectCancelBtn).on("click", function () {
      location.href = $(pointsSelectElement.cnfRedirectUrlPoints).val();
    });
  },
  /**
   * 設定クリックのイベント
   * @param {null}
   * @return {null}
   */
  cnfPointsSelectReadyOnLoad: function () {
    // kind値の取得
    var kindPointsSelect = $(pointsSelectElement.cnfKindPointsSelect).val();
    var $cnfPointsSelectListCheckbox = $(pointsSelectElement.cnfPointsSelectListCheckbox);
    var $cnfPointsSelectListCheckboxNotDisabled = $(pointsSelectElement.cnfPointsSelectListCheckbox).not(':disabled');
    $(pointsSelectElement.cnfPointsSelectSettingBtn).prop('disabled', true);
    $cnfPointsSelectListCheckbox.filter(":disabled").parent().css('opacity', '0.4');
    // 設定を無効に設定
    if ($cnfPointsSelectListCheckboxNotDisabled.filter(":checked").length > 0
            && $cnfPointsSelectListCheckboxNotDisabled.filter(":disabled").length > 0) {
      $(pointsSelectElement.cnfPointsSelectSettingBtn).prop('disabled', false);
    }
    var noneViewPointsLength = 
      $(pointsSelectElement.cnfCountPointsSelect).val()
      - $cnfPointsSelectListCheckbox.filter(':checked').length;
    // チェックボックス変更のイベント
    $cnfPointsSelectListCheckbox.on("change", function () {
      this.value = (Number(this.checked));
      var activedChkBoxArr = $cnfPointsSelectListCheckbox.not(':disabled');
      $(this).val($(this).attr('code'));
      var chkBoxArr = $cnfPointsSelectListCheckbox;
      if (activedChkBoxArr.filter(":checked").length === 0) {
        $(pointsSelectElement.cnfPointsSelectSettingBtn).prop('disabled', true).addClass('cnf_disabled_fontLGray');
      } else {
        $(pointsSelectElement.cnfPointsSelectSettingBtn).prop('disabled', false).removeClass('cnf_disabled_fontLGray');
      }
      if (kindPointsSelect === CNF_SCR_KND_HOME_STATION) {
        // 設定済みの駅数と選択数が合わせて3の状態で選択肢が未選択時
        if (chkBoxArr.filter(":checked").length + noneViewPointsLength > STATION_MAX_ARRAY) {
          // 駅追加上限通知ダイアログ[S-99-2-8]を表示する
          $("#config_info_dialog0").show(0, function () {
            var scrollpos = $(window).scrollTop();
            $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
          });
          $(this).prop('checked', false);
        }
      } else if (kindPointsSelect === CNF_SCR_KND_USE_ROUTE) {
        // 設定済みの路線数と選択数が合わせて20の状態で選択肢が未選択時
        if (chkBoxArr.filter(":checked").length + noneViewPointsLength > ROUTE_MAX_ARRAY) {
          // 路線追加上限通知ダイアログ[S-99-2-11]を表示する
          $("#config_info_dialog0").show(0, function () {
            var scrollpos = $(window).scrollTop();
            $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
          });
          $(this).prop('checked', false);
        }
      } else if (kindPointsSelect === CNF_SCR_KND_USE_ROAD
              || kindPointsSelect === CNF_SCR_KND_USE_NATIONAL_ROAD
              || kindPointsSelect === CNF_SCR_KND_USE_HIGHWAY) {
        // 設定済みの道路数と選択数が合わせて80の状態で選択肢が未選択時
        if (chkBoxArr.filter(":checked").length + noneViewPointsLength > ROAD_MAX_ARRAY) {
          // 道路追加上限通知ダイアログ[S-99-2-14]を表示する
          $("#config_info_dialog0").show(0, function () {
            var scrollpos = $(window).scrollTop();
            $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
          });
          $(this).prop('checked', false);
        }
      }
    });
  }
};
//</editor-fold>
/**
 * プロフィール画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="profile">
/**
 * プロファイル画面の各要素の宣言
 * @type object
 */
var profileElement = {
  sexView: "#cnf_sex",
  bloodTypeView: "#cnf_bloodType",
  birthday: "#cnf_birthday",
  workView: "#cnf_work",
  holidayView: "#cnf_holiday",
  transportationWeekdayView: "#cnf_transportationWeekday",
  transportationHolidayView: "#cnf_transportationHoliday",
  departureTimeWeekday: "#cnf_departureTimeWeekday",
  avgArrivalTime: "#cnf_avgArrivalTime",
  wakeupTimeWeekday: "#cnf_wakeupTimeWeekday",
  wakeupTimeHoliday: "#cnf_wakeupTimeHoliday",
  sleepTimeBeforeWeekday: "#cnf_sleepTimeBeforeWeekday",
  sleepTimeBeforeHoliday: "#cnf_sleepTimeBeforeHoliday",
  resetButton: "#cnf_resetButton",
  profileFooter: "#cnf_profileFooter",
  classColor: "#cnf_extensionSetting .cnf_listItem_fontBlue",
  nicknameText: "#cnf_nickname_text",
  nicknameInitText: "#cnf_nickname_text_hidden",
  memberConfirmInfoButton: "#cnf_memberConfirmInfo",
  reloadPageButton: "#cnf_reloadButton"
};
/**
 * プロファイル画面の各イベントの宣言
 * @type object
 */
var profileEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.splitNicknameText();
    this.cnfSexProfileClick();
    this.cnfBloodTypeProfileClick();
    this.cnfWorkProfileClick();
    this.cnfHolidayProfileClick();
    this.cnfTransportationHolidayProfileClick();
    this.cnfTransportationWeekdayProfileClick();
    this.cnfInitDisplayProfile();
    this.cnfResetButtonClick();
    this.cnfMemberConfirmInfoButtonCLick();
    this.cnfReloadPageButtonClick();
  },
  // ニックネーム表示値の上限が20バイトになる
  splitNicknameText: function () {
    var inputText = $(profileElement.nicknameInitText).val();
    if (inputText) {
      var totalByte = getByte(inputText);
      if(totalByte > 0) {
        inputText = cutNickname(inputText);
        $(profileElement.nicknameText).text(inputText);
      }
    }
  },
  /**
   * クリックで性別選択ダイアログ[S-99-3-1]を表示
   * @param {null}
   * @return {null}
  */
  cnfSexProfileClick: function () {
    $(profileElement.sexView).on("click", function () {
      // 性別選択ダイアログ[S-99-3-1]を表示する
      if($(this).data('member') === 1) {
        return false;
      }
      $("#config_radio_dialog0").show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * クリックで血液型選択ダイアログ[S-99-3-2]を表示
   * @param {null}
   * @return {null}
   */
  cnfBloodTypeProfileClick: function () {
    $(profileElement.bloodTypeView).on("click", function () {
      // 血液型選択ダイアログ[S-99-3-2]を表示する
      $("#config_radio_dialog1").show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * クリックで職業選択ダイアログ[S-99-3-3]を表示
   * @param {null}
   * @return {null}
  */
  cnfWorkProfileClick: function () {
    $(profileElement.workView).on("click", function () {
      // 職業選択ダイアログ[S-99-3-3]を表示する
      $("#config_radio_dialog2").show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * クリックで休日選択ダイアログ[S-99-4-1]を表示
   * @param {null}
   * @return {null}
  */
  cnfHolidayProfileClick: function () {
    $(profileElement.holidayView).on("click", function () {
      // 休日選択ダイアログ[S-99-4-1]を表示する
      $("#config_checkbox_dialog0").show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * クリックで通常交通手段(平日)選択ダイアログ[S-99-3-4]を表示
   * @param {null}
   * @return {null}
  */
  cnfTransportationWeekdayProfileClick: function () {
    $(profileElement.transportationWeekdayView).on("click", function () {
      // 通常交通手段(平日)選択ダイアログ[S-99-3-4]を表示する
      $("#config_radio_dialog3").show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * クリックで通常交通手段(休日)選択ダイアログ[S-99-3-5]を表示
   * @param {null}
   * @return {null}
  */
  cnfTransportationHolidayProfileClick: function () {
    $(profileElement.transportationHolidayView).on("click", function () {
      // 通常交通手段(休日)選択ダイアログ[S-99-3-5]を表示する
      $("#config_radio_dialog4").show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    });
  },
  /**
   * 画面スクロール
   * @param {null}
   * @return {null}
   */
  cnfInitDisplayProfile: function () {
    // カードで指定された画面内遷移の遷移先
    var initDisplay = $('input:hidden[name=cnf_initDisplay]').val();

    if (initDisplay !== undefined && initDisplay !== null) {
      if (initDisplay === 'focusHomeArea') {
        // Handler for .ready() called.
        $('html, body').animate({
          scrollTop: $("#cnf_focusHomeArea").offset().top
        }, 'slow');
      } else if (initDisplay === 'focusWorkplace') {
        // Handler for .ready() called.
        $('html, body').animate({
          scrollTop: $("#cnf_focusWorkplace").offset().top
        }, 'slow');
      } else if (initDisplay === 'focusWorkplaceStation') {
        // Handler for .ready() called.
        $('html, body').animate({
          scrollTop: $("#cnf_focusWorkplaceStation").offset().top
        }, 'slow');
      } else if (initDisplay.indexOf('viewHouseArea') !== -1) {
        $(addressInfoEvent.displayConfigConfirmDialog());
      } else if (initDisplay.indexOf('viewHoliday') !== -1) {
        // 休日選択ダイアログ[S-99-4-1]を表示する
        $("#config_checkbox_dialog0").show(0, function () {
          var scrollpos = $(window).scrollTop();
          $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
        });
      }
    }
    profileEvent.cnfShowHideResetButton();
  },
  /**
   * クリックで拡張設定リセット選択画面S-2-1-2へ移動
   * @param {null}
   * @return {null}
  */
  cnfResetButtonClick: function () {
    $(profileElement.resetButton).on("click", function () {
      var dataLink = $(profileElement.resetButton).attr('data-link');
      // 拡張設定リセット選択画面[S-2-1-2]に遷移する
      location.href = dataLink;
    });
  },
  /**
   * S-2-1-2 拡張設定リセット選択画面でリセットできる項目がすべて未設定時
   * @param {null}
   * @return {null}
   */
  cnfShowHideResetButton: function () {
    if ($(profileElement.classColor).length === MAX_LENGTH_RESET_BUTTON) {
      // 非表示
      $(profileElement.profileFooter).hide();
    } else {
      // 表示
      $(profileElement.profileFooter).show();
    }
  },
  /**
   * 会員情報/プロフィールを確認する
   * @param {null}
   * @return {null}
   */
  cnfMemberConfirmInfoButtonCLick: function () {
    $(profileElement.memberConfirmInfoButton).on("click", function () {
      var dataLink = $(this).attr('data-link');
      location.href = dataLink;
    });
  },
  /**
   * 会員情報/プロフィールを確認する
   * @param {null}
   * @return {null}
   */
  cnfReloadPageButtonClick: function () {
    $(profileElement.reloadPageButton).on("click", function () {
      location.reload();
    });
  }
};
//</editor-fold>
/**
 * profileExtendItemsReset画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="profileExtendItemsReset">
/**
 * viewProfileExtendItemsResetElement画面の各要素の宣言
 * @type object
 */
var profileExtendItemsResetElement = {

  cnfCheckAll: "#cnf_reset_checkAll",
  cnfCancelBtn: "#cnf_reset_cancelBtn",
  cnfSettingBtn: ".cnf_reset_settingBtn",
  cnfRedirectUrl: "#cnf_reset_urlRedirect"
};

/**
 * viewProfileExtendItemsResetElement画面の各イベントの宣言
 * @type object
 */
var profileExtendItemsResetEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.checkAllClick();
    this.cancelBtnClick();
    this.readyOnLoad();
  },

  /**
   * 無効にされたチェックボックスを除いて、全てのチェックボックスにチェックを付ける
   */
  checkAllClick: function () {
    $(profileExtendItemsResetElement.cnfCheckAll).on("change", function () {
      $('input:checkbox').not(':disabled').prop('checked', this.checked);
      if ($(profileExtendItemsResetElement.cnfCheckAll).prop('checked') === true) {
          $('#cnf_profileReset_form input:checkbox').not(':disabled').val(1);
      } else {
          $('#cnf_profileReset_form input:checkbox').not(':disabled').val(0);
      }
    });
  },

  /**
   * ｒviewProfileページへリダイレクト
   */
  cancelBtnClick: function () {
    $(profileExtendItemsResetElement.cnfCancelBtn).on("click", function () {
      location.href = $(profileExtendItemsResetElement.cnfRedirectUrl).val();
    });
  },

  /**
   * ビューページをロードする時にイベント及びデータの初期化
   */
  readyOnLoad: function () {

    // チェックボックスの初期値が0になる
    $('#cnf_profileReset_form input:checkbox').val(0);

    // 設定ボタンを無効に設定
    $(profileExtendItemsResetElement.cnfSettingBtn).prop('disabled', true).addClass('cnf_disabled_fontLGray');
    $(profileExtendItemsResetElement.cnfSettingBtn).removeClass('cnf_hidden');
    $(profileExtendItemsResetElement.cnfCancelBtn).removeClass('cnf_hidden');
    
    // チェックボックスに値を作成
    $('#cnf_profileReset_form input:checkbox').on("change", function () {
      this.value = (Number(this.checked));
      var activedChkBoxArr = $("input[type='checkbox']").not(':disabled').not('#cnf_reset_checkAll');
      // チェックボックスが何でもチェックを付けない場合、全て選択のチェックボックスにチェックを外す。
      if (activedChkBoxArr.length === activedChkBoxArr.filter(":checked").length) {
        $(profileExtendItemsResetElement.cnfCheckAll).prop('checked', true);
      } else {
        $(profileExtendItemsResetElement.cnfCheckAll).prop('checked', false);
      }

      // チェックボックスにチェックを付ける・付けない場合、設定ボタンを有効・無効に設定
      if (activedChkBoxArr.filter(":checked").length === 0) {
        $(profileExtendItemsResetElement.cnfSettingBtn).prop('disabled', true).addClass('cnf_disabled_fontLGray');
      } else {
        $(profileExtendItemsResetElement.cnfSettingBtn).prop('disabled', false).removeClass('cnf_disabled_fontLGray');
      }
    });
  }
};
//</editor-fold>
/**
 * profileNickname画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="profileNickname">
/**
 * viewProfileNicknameの各要素の宣言
 * @type object
 */
var profileNicknameElement = {

  cnfSettingBtn: "#cnf_nickname_settingBtn",
  cnfNickname: "#cnf_nickname_text",
  cnfUrlSettingNickname: "#cnf_urlSettingNickname",
  cnfNicknameResetBtn: ".cnf_nickname_resetBtn",
  cnfNicknameInit: "#cnf_nickname_text_hidden"
};
/**
 * viewProfileNicknameの各イベントの宣言
 * @type object
 */
var profileNicknameEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.settingBtnClick();
    this.resetBtnClick();
    this.validateNicknameInput();
    this.splitNicknameText();
  },

  // ニックネーム表示値の上限が20バイトになる
  splitNicknameText: function () {
    var inputText = $(profileNicknameElement.cnfNicknameInit).val();
    if (inputText) {
      inputText = cutNickname(inputText);
      $(profileNicknameElement.cnfNickname).val(inputText);
    }
  },

  // ニックネーム入力値の上限が20バイトになる
  validateNicknameInput: function () {
    commonFilterTextBox(profileNicknameElement.cnfNickname, 20, null, null, profileNicknameElement.cnfSettingBtn, 'cnfSetting');
  },

  // 更新のためにデータを作成・サーバへ返却
  settingBtnClick: function () {
    $(profileNicknameElement.cnfSettingBtn).bind("cnfSetting", function () {
      var urlSettingNickname = $(profileNicknameElement.cnfUrlSettingNickname).val();
      var nickname = $(profileNicknameElement.cnfNickname).val();
      location.href = urlSettingNickname + '&nickname=' + encodeURIComponent(nickname);
    });
    $(profileNicknameElement.cnfSettingBtn).on('click', function () {
      loadingStart();
      $(this).trigger('cnfSetting');
    });
  },

  // ニックネームの入力データを削除
  resetBtnClick: function () {
    $(profileNicknameElement.cnfNicknameResetBtn).on("click", function () {
      $(profileNicknameElement.cnfNickname).val('').focus();
    });
  }
};
//</editor-fold>
/**
 * radioItem画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="radioItem">
/**
 * viewRadioItem画面の各要素の宣言
 * @type object
 */
var radioItemElement = {

  cnfConfigBtn: "#cnf_radioItem_configBtn",
  cnfRadioItemForm: "#cnf_radioItem_form",
  cnfKind: "#cnf_radioItem_kind",
  cnfViewId: "#cnf_radioItem_viewId",
  cnfUrlSettingRadioItem: "#cnf_radioItem_urlSettingRadioItem",
  cnfRegistLocation: "#cnf_radioItem_registLocation",
  cnfUniqueKey: "#cnf_radioItem_uniqueKey",
  cnfBasicArea: "#cnf_radioItem_basicArea",
  cnfCollectiveReceive: "#cnf_radioItem_collectiveReceive"
};

/**
 * viewRadioItem画面の各イベントの宣言
 * @type object
 */
var radioItemEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {

    this.cnfConfigBtnClick();
    this.readyOnload();
  },

  /**
   * 更新のためにデータを作成・サーバへ返却
   */
  cnfConfigBtnClick: function () {
    $(radioItemElement.cnfConfigBtn).on("click", function () {
      loadingStart();
      var kind = $(radioItemElement.cnfKind).val();
      // S-3-2-3 知るタブ表示カード地点画面
      if (kind === CNF_SCR_KND_GET_KNOW_TAB) {
        var registLocationGrp = $("input:radio[name ='cnf_registLocationGrp']:checked").val();
        var uniqueKeyGrp = '';
        if (registLocationGrp !== CNF_YOUR_LOCATION
              && registLocationGrp !== CNF_HOME
              && registLocationGrp !== CNF_WORKPLACE) {
          uniqueKeyGrp = $("input:radio[name ='cnf_uniqueKeyGrp']:checked").val();
          registLocationGrp = CNF_REGIST_LOCATION;
        }
        $(radioItemElement.cnfRegistLocation).val(registLocationGrp);
        $(radioItemElement.cnfUniqueKey).val(uniqueKeyGrp);
      // S-3-5-2 設定地域画面
      } else if (kind === CNF_SCR_KND_WEEK_END_TRAVEL) {
        var basicArea = $("input:radio[name ='cnf_basicAreaGrp']:checked").val();
        $(radioItemElement.cnfBasicArea).val(basicArea);
      // S-5-2-1 一括受信設定画面
      } else if (kind === CNF_SCR_KND_COLLECTIVE_RECEIVE) {
        var collectiveReceive = $("input:radio[name ='cnf_collectiveReceiveGrp']:checked").val();
        $(radioItemElement.cnfCollectiveReceive).val(collectiveReceive);
      }
      $(radioItemElement.cnfRadioItemForm).closest('form').submit();
    });
  },

  /**
   * ビューページをロードする時にイベント・データの初期化
   */
  readyOnload: function () {

    // ラジオボタンにチェックを付ける場合、設定ボタンが有効に設定
    $('#cnf_radioItem_form input:radio').on("change", function () {
      $("#cnf_radioItem_form input:radio").not(this).prop('checked', false);
      $(radioItemElement.cnfConfigBtn).prop('disabled', false).removeClass('cnf_disabled_fontLGray');
    });
    $(radioItemElement.cnfConfigBtn).removeClass('cnf_hidden');

    // データが設定される時にラジオボタンにチェックを付ける
    
    // S-3-2-3 知るタブ表示カード地点画面
    var registLocation = $(radioItemElement.cnfRegistLocation).val();
    if (registLocation === CNF_YOUR_LOCATION
            || registLocation === CNF_HOME 
            || registLocation === CNF_WORKPLACE) {
      $('#cnf_radioItem_registLocation' + registLocation).click();
    } else {
      var uniqueKey = $(radioItemElement.cnfUniqueKey).val();
      $('#cnf_radioItem_uniqueKey' + uniqueKey).click();
    }

    // S-3-5-2 設定地域画面
    var basicArea = $(radioItemElement.cnfBasicArea).val();
    $('#cnf_radioItem_basicArea' + basicArea).click();

    // S-5-2-1 一括受信設定画面
    var collectiveReceive = $(radioItemElement.cnfCollectiveReceive).val();
    $('#cnf_radioItem_collectiveReceive' + collectiveReceive).click();

    // ラジオボタンが何でもチェックを付けない場合、設定ボタンを無効に設定
    var activedRadioArr = $("input[type='radio']:checked");
    if (activedRadioArr.length === 0) {
      $(radioItemElement.cnfConfigBtn).prop('disabled', true).addClass('cnf_disabled_fontLGray');
    } else {
      $(radioItemElement.cnfConfigBtn).prop('disabled', false).removeClass('cnf_disabled_fontLGray');
    }

    // 無効にされたラジオボタンを格納する<li>タグを暈す
    $('#cnf_radioItem_form input:radio:disabled').parent().css('opacity', '0.4');
  }

};

//</editor-fold>
/**
 * 道路設定画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="roadpoint">
/**
 * 道路設定画面の各要素の宣言
 * @type object
 */
var countRoad;
var urlViewSearchRoad;
var urlViewDeletePoint;
var roadElement = {
  countRoad: "#countRoad",
  rowAddRoad: ".row_addRoad",
  rowRemoveRoad: ".row_removeRoad",
  urlViewSearchRoad: "#urlViewSearchRoad",
  urlViewDeletePoint: "#urlViewDeletePoint"
};

/**
 * 道路設定画面の各イベントの宣言
 * @type object
 */
var roadEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.getCountRoad();
    this.gotoAddRoadScreen();
    this.gotoRemoveRoadScreen();
  },

  /**
   * 道路設定数量取得の処理
   * 道路追加画面[S-3-3-4-10]URLの取得
   * 削除道路選択画面[S-3-3-4-60]URLの取得
   * @param {null}
   * @return {null}
   */
  getCountRoad: function () {
    countRoad = $(roadElement.countRoad).val();
    urlViewSearchRoad = $(roadElement.urlViewSearchRoad).val();
    urlViewDeletePoint = $(roadElement.urlViewDeletePoint).val();
  },

  /**
   * 道路設定画面での[道路追加]ボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  gotoAddRoadScreen: function () {
    $(roadElement.rowAddRoad).on("click", function () {
      if (countRoad >= ROAD_MAX_ARRAY)
      {
        return;
      } else {
        // 道路追加画面[S-3-3-4-10]
        location.href = urlViewSearchRoad;
      }
    });
  },

  /**
   * 道路設定画面での[道路削除]ボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  gotoRemoveRoadScreen: function () {
    $(roadElement.rowRemoveRoad).on("click", function () {
      if (countRoad == NO_REGIST_POINT_SETING)
      {
        return;
      } else {
        // 削除道路選択画面[S-3-3-4-60]
        location.href = urlViewDeletePoint;
      }
    });
  }
};
//</editor-fold>
/**
 * routePoint画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="routePoint">
/**
 * 鉄道設定画面の各要素の宣言
 * @type object
 */
var countRoute;
var urlViewSearchRoute;
var routeElement = {
  countRoute: "#countRoute",
  rowAddRoute: ".row_addRoute",
  rowRemoveRoute: ".row_removeRoute",
  urlViewSearchRoute: "#urlViewSearchRoute",
  urlViewDeletePoint: "#urlViewDeletePoint"
};

/**
 * 鉄道設定画面の各イベントの宣言
 * @type object
 */
var routeEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.getCountRoute();
    this.gotoAddRouteScreen();
    this.gotoRemoveRouteScreen();
  },

  /**
   * 鉄道設定数量の取得
   * 路線選択画面[S-3-3-3-10]URLの取得
   * 削除路線選択画面[S-3-3-3-20]URLの取得
   * @param {null}
   * @return {null}
   */
  getCountRoute: function () {
    countRoute = $(routeElement.countRoute).val();
    urlViewSearchRoute = $(routeElement.urlViewSearchRoute).val();
    urlViewDeletePoint = $(routeElement.urlViewDeletePoint).val();
  },

  /**
   * 鉄道設定画面での[路線追加]ボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  gotoAddRouteScreen: function () {
    $(routeElement.rowAddRoute).on("click", function () {
      if (countRoute >= ROUTE_MAX_ARRAY)
      {
        return;
      } else {
        // 路線選択画面[S-3-3-3-10]
        location.href = urlViewSearchRoute;
      }
    });
  },

  /**
   * 鉄道設定画面での[路線削除]ボタンをクリックする時の処理
   * @param {null}
   * @return {null}
   */
  gotoRemoveRouteScreen: function () {
    $(routeElement.rowRemoveRoute).on("click", function () {
      if (countRoute == NO_REGIST_POINT_SETING)
      {
        return;
      } else {
        // 削除路線選択画面[S-3-3-3-20]
        location.href = urlViewDeletePoint;
      }
    });
  }
};
//</editor-fold>
/**
 * 検索画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="search">
/**
 * viewSearch画面の各要素の宣言
 * @type object
 */
var searchElement = {

  cnfSearchInput: '#cnf_search_searchInput',
  cnfSearchButton: "#cnf_search_searchBtn",
  cnfSearchBtnFont: "#cnf_searchBtn_font",
  cnfItemList: '#cnf_search_itemList li',
  cnfItemListBorder: '#cnf_search_itemList',
  cnfRoadList: '#cnf_search_roadList li',
  cnfKind: "#cnf_search_kind",
  cnfMaxlength: "#cnf_search_maxlength",
  cnfPrefCode: "#cnf_search_prefCode",
  cnfGeneralRoadQuery: "#cnf_search_generalRoadQuery",
  cnfHighwayQuery: "#cnf_search_highwayQuery",
  cnfHomeStation: "#cnf_search_homeStation",
  cnfDialogType: "#cnf_search_dialogType",
  cnfUrlSelect: "#cnf_search_urlSelect",
  cnfUrlSearchResult: "#cnf_search_urlSearchResult",
  cnfUrlSearch: "#cnf_search_urlSearch",
  cnfUrlGeneralRoad: "#cnf_search_urlGeneralRoad",
  cnfUrlHomeStation: "#cnf_search_urlHomeStation",
  cnfUrlHighWay: "#cnf_search_urlHighWay",
  cnfUrlArea: "#cnf_search_urlArea",
  cnfUrlCityHighWay: "#cnf_search_urlCityHighWay"
};

/**
 * viewSearch画面の各イベントの宣言
 * @type object
 */
var searchEvent = {
  init: function () {
    this.searchButtonClick();
    this.itemListClick();
    this.roadListClick();
    this.readyOnLoad();
    this.validateSearchInput2();
  },
  
  /**
   * 事前のルールで要検索の入力値を確認
   * @param {string} value search text
   * @return {null}
   */
  validateSearchInput: function (value) {
    // データが未入力の場合、検索ボタンを無効に設定
    if ($(searchElement.cnfSearchInput).val() === '') {
      $(searchElement.cnfSearchButton).prop('disabled', true);
      $(searchElement.cnfSearchBtnFont).addClass('cnf_disabled_fontLGray');
    }
  },
  
  /**
   * 必要な検索の入力値を事前ルールで確認します。
   * @param {null}
   * @return {null}
   */
  validateSearchInput2: function () {
    
    var kind = $(searchElement.cnfKind).val();
    // 入力可能の最大バイト数
    var maxlength = $(searchElement.cnfMaxlength).val();

    // S-2-3-1
    // S-2-5-1
    // S-3-2-2-10
    if (kind === CNF_SCR_KND_USER_AREA || kind === CNF_SCR_KND_OFFICE_ADDRESS || kind === CNF_SCR_KND_WEATHER_ADDRESS) {
      commonFilterTextBox(searchElement.cnfSearchInput, maxlength, HALFSIZE_NUMMERIC, searchEvent.callbackSettingButton1, searchElement.cnfSearchButton, 'cnfSearch');
    // S-2-4-1
    // S-3-2-2-20
    // S-3-3-2-10
    // S-3-3-3-10
    // S-3-3-4-10
    } else {
      commonFilterTextBox(searchElement.cnfSearchInput, maxlength, NONE_EMOTICON, searchEvent.callbackSettingButton2, searchElement.cnfSearchButton, 'cnfSearch');
    }
  },

  /**
   * コールバック設定ボタン
   * @param ime 名前モード
   * @return {null}
   */
  callbackSettingButton1 : function (ime) {
    var maxlength = $(searchElement.cnfMaxlength).val();
    if ($(searchElement.cnfSearchInput).val().length >= maxlength && !ime) {
      $(searchElement.cnfSearchButton).prop('disabled', false);
      $(searchElement.cnfSearchBtnFont).removeClass('cnf_disabled_fontLGray');
      return true;
    } else {
      $(searchElement.cnfSearchButton).prop('disabled', true);
      $(searchElement.cnfSearchBtnFont).addClass('cnf_disabled_fontLGray');
      return false;
    }
  },

  /**
   * コールバック設定ボタン
   * @param ime 名前モード
   * @return {null}
   */
  callbackSettingButton2 : function (ime) {
    if ($(searchElement.cnfSearchInput).val().length > 0 && !ime) {
      $(searchElement.cnfSearchButton).prop('disabled', false);
      $(searchElement.cnfSearchBtnFont).removeClass('cnf_disabled_fontLGray');
      return true;
    } else {
      $(searchElement.cnfSearchButton).prop('disabled', true);
      $(searchElement.cnfSearchBtnFont).addClass('cnf_disabled_fontLGray');
      return false;
    }
  },

  /**
   * 検索ボタンを押下する時に入力ワードのデータを作成・検索のためにサーバへ返却
   * @param {null}
   * @return {null}
   */
  searchButtonClick: function () {
    $(searchElement.cnfSearchButton).bind('cnfSearch', function () {
      var textSearch = $(searchElement.cnfSearchInput).val();
      if (textSearch.length > $(searchElement.cnfMaxlength).val()) {
        textSearch = textSearch.substring(0, $(searchElement.cnfMaxlength).val());
      }

      var searchResultUrl = '';
      var kind = $(searchElement.cnfKind).val();
      // S-3-3-4-10 và S-3-2-2-20
      if (kind === CNF_SCR_KND_USE_ROAD || kind === CNF_SCR_KND_WEATHER_FACILLITY) {
        searchResultUrl = $(searchElement.cnfUrlSearchResult).val();
      // 他の画面
      } else {
        searchResultUrl = $(searchElement.cnfUrlSearch).val();
      }

      location.href = searchResultUrl + "&search=" + encodeURIComponent(textSearch);
    });
    $(searchElement.cnfSearchButton).on('click', function(){
      $(this).trigger('cnfSearch');
    });
  },

  /**
   * <li>タグをクリックする時にデータを作成・検索ためにサーバへ返却
   * @param {null}
   * @return {null}
   */
  itemListClick: function () {
    var kind = $(searchElement.cnfKind).val();
    $(searchElement.cnfItemList).click(function () {
      var code = $(this).attr("name");
      // S-2-3-1、 S-2-5-1、 S-3-2-2-10の場合、1桁のコードを渡す 
      if (kind === CNF_SCR_KND_USER_AREA
              || kind === CNF_SCR_KND_OFFICE_ADDRESS
              || kind === CNF_SCR_KND_WEATHER_ADDRESS) {
        code = code.slice(-1);
      }
      // S-2-3-1, S-2-5-1, S-3-2-2-10
      if (kind === CNF_SCR_KND_USER_AREA
              || kind === CNF_SCR_KND_OFFICE_ADDRESS
              || kind === CNF_SCR_KND_WEATHER_ADDRESS) {
        location.href = $(searchElement.cnfUrlSelect).val() + "&code=" + code;
      // S-3-3-4-10
      } else if (kind === CNF_SCR_KND_USE_ROAD) {
        location.href = $(searchElement.cnfUrlArea).val() + "&areaCode=" + code;
      // S-2-4-1, S-3-3-2-10, S-3-3-3-10
      } else if (kind === CNF_SCR_KND_OFFICE_STATION
              || kind === CNF_SCR_KND_HOME_STATION
              || kind === CNF_SCR_KND_USE_ROUTE) {
        location.href = $(searchElement.cnfUrlSelect).val() + "&areaCode=" + code;
      }
    });

  },

  /**
   * <li>タグをクリックする時にデータを作成・検索ためにサーバへ返却
   * S-3-3-4-10画面のみ利用
   * @param {null}
   * @return {null}
   */
  roadListClick: function () {
    $(searchElement.cnfRoadList).click(function () {
      var kind = $(searchElement.cnfKind).val();
      var code = $(this).attr("name");
      if (kind === CNF_SCR_KND_USE_ROAD) {
        if (code === CNF_GENERAL_ROAD_STR) {
          location.href = $(searchElement.cnfUrlGeneralRoad).val() + $(searchElement.cnfGeneralRoadQuery).val();
        } else if (code === CNF_HIGHWAY_STR) {
          location.href = $(searchElement.cnfUrlHighWay).val() + $(searchElement.cnfHighwayQuery).val();
        } else {
          location.href = $(searchElement.cnfUrlCityHighWay).val() + code;
        }
      }
    });
  },

  /**
   * ビューページをロードする時にイベント及びデータの初期化
   * @param {null}
   * @return {null}
   */
  readyOnLoad: function () {

    // テキスト入力が空白の場合、検索ボタンを無効に設定
    if ($(searchElement.cnfSearchInput).val() === '') {
      $(searchElement.cnfSearchButton).prop('disabled', true);
      $(searchElement.cnfSearchBtnFont).addClass('cnf_disabled_fontLGray');
    }
    $(searchElement.cnfSearchBtnFont).removeClass('cnf_hidden');
    
    // dialogTypeが設定される時にダイアログを表示
    var dialogType = $(searchElement.cnfDialogType).val();
    if (dialogType !== null && dialogType !== '') {
      if (dialogType === CNF_DIALOG_TYPE_NO_RESULT) {
        $('#config_info_dialog0').show(0, function () {
          var scrollpos = $(window).scrollTop();
          $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
        });
      } else if (dialogType === CNF_DIALOG_TYPE_OVER_NUM) {
        $('#config_info_dialog1').show(0, function () {
          var scrollpos = $(window).scrollTop();
          $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
        });
      }
    }

    var kind = $(searchElement.cnfKind).val();
    if (kind === CNF_SCR_KND_USE_ROUTE
          || kind === CNF_SCR_KND_OFFICE_STATION
          || kind === CNF_SCR_KND_HOME_STATION
          || kind === CNF_SCR_KND_USER_AREA
          || kind === CNF_SCR_KND_OFFICE_ADDRESS) {
      $(searchElement.cnfItemListBorder).removeClass('cnf_lastBorder_none');
    }
      
    // 新幹線をクリックする時にデータを作成・サーバーへ返却
    $(searchElement.cnfHomeStation).click(function () {
      var kind = $(searchElement.cnfKind).val();
      // S-3-3-3-10
      if (kind === CNF_SCR_KND_USE_ROUTE) {
        location.href = $(searchElement.cnfUrlHomeStation).val();
      // S-2-4-1, S-3-3-2-10
      } else if (kind === CNF_SCR_KND_OFFICE_STATION || kind === CNF_SCR_KND_HOME_STATION)
        location.href = $(searchElement.cnfUrlSelect).val();
      });
  }
};

//</editor-fold>
/**
 * フリーワード検索結果画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="freeWordSearchResult">
/**
 * フリーワード検索結果画面の各要素の宣言
 * @type object
 */
var freeWordSearchResultElement = {
  cnfListItemSelectRoad: ".cnf_listItem_selectRoad",
  cnfListItemSearchRoad: ".cnf_listItem_searchRoad",
  cnfListItemSearchRoadAllNation: ".cnf_listItem_searchRoadAllNation",
  cnfListItemSearchPref: ".cnf_listItem_searchPref",
  querySelectRoad: ".querySelectRoad",
  urlViewSelectRoadId: "#urlViewSelectRoad",
  urlViewSearchRoadId: "#urlViewSearchRoad",
  urlViewSelectRoad: "",
  urlViewSearchRoad: ""
};

/**
 * フリーワード検索結果画面の各イベントの宣言
 * @type object
 */
var freeWordSearchResultEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.getValueParameter();
    this.gotoSelectRoadScreen();
    this.gotoResultSearchRoadScreen();
    this.gotoResultSearchRoadNationScreen();
    this.gotoResultSearchRoadTodoFukenScreen();
  },

  /**
   * 地点選択画面URL取得処理
   *フリーワード検索結果画面URL取得
   * @param {null}
   * @return {null}
   */
  getValueParameter: function () {
    freeWordSearchResultElement.urlViewSelectRoad = $(freeWordSearchResultElement.urlViewSelectRoadId).val();
    freeWordSearchResultElement.urlViewSearchRoad = $(freeWordSearchResultElement.urlViewSearchRoadId).val();
  },

  /**
   * 地点選択画面表示の処理 
   * 道路選択(一般道)画面[S-3-3-4-51]
   * 高速道路選択(高速・有料道路)画面[S-3-3-4-52]
   * 高速道路選択(その他高速・有料道路)画面[S-3-3-4-53]
   * @param {null}
   * @return {null}
   */
  gotoSelectRoadScreen: function () {
    $(freeWordSearchResultElement.cnfListItemSelectRoad).on("click", function () {
      var querySelectRoad = $(this).find(".querySelectRoad").val();
      location.href = freeWordSearchResultElement.urlViewSelectRoad + querySelectRoad;
    });
  },

  /**
   * S-3-3-4-14　道路フリーワード検索結果画面（道路）表示の処理
   * @param {null}
   * @return {null}
   */
  gotoResultSearchRoadScreen: function () {
    $(freeWordSearchResultElement.cnfListItemSearchRoad).on("click", function () {
      var itemInActive = $(this).find(".cnf_listItem_2column").find(".cnf_font_disable");
      if (itemInActive.length > NO_REGIST_POINT_SETING) {
        return;
      }
      // 道路フリーワード検索結果画面（道路）[S-3-3-4-14]に遷移する
      var querySearchResult = $(this).find(".querySearchResult").val();
      location.href = freeWordSearchResultElement.urlViewSearchRoad + querySearchResult;
    });
  },

  /**
   * S-3-3-4-12　道路フリーワード検索結果画面（全国）表示の処理
   * @param {null}
   * @return {null}
   */
  gotoResultSearchRoadNationScreen: function () {
    $(freeWordSearchResultElement.cnfListItemSearchRoadAllNation).on("click", function () {
      // 道路フリーワード検索結果画面（全国）[S-3-3-4-12]に遷移する
      var querySearchResult = $(this).find(".querySearchResult").val();
      location.href = freeWordSearchResultElement.urlViewSearchRoad + querySearchResult;
    });
  },

  /**
   * S-3-3-4-13　道路フリーワード検索結果画面（都道府県）表示の処理
   * @param {null}
   * @return {null}
   */
  gotoResultSearchRoadTodoFukenScreen: function () {
    $(freeWordSearchResultElement.cnfListItemSearchPref).on("click", function () {
      var itemInActive = $(this).find(".cnf_listItem_2column").find(".cnf_font_disable");
      if (itemInActive.length > NO_REGIST_POINT_SETING) {
        return;
      }
      // 道路フリーワード検索結果画面(都道府県)[S-3-3-4-13]に遷移する
      var querySearchResult = $(this).find(".querySearchResult").val();
      location.href = freeWordSearchResultElement.urlViewSearchRoad + querySearchResult;
    });
  }
};
//</editor-fold>

/**
 * 家電らのお知らせのjs
 */
//<editor-fold defaultstate="collapsed" desc="contentsConsumerElectronics">
/**
 * contents画面の各要素の宣言
 * @type object
 */
var contentsConsumerElectronicsElement = {
  cnfViewContentsConsumerElectronics: "#cnf_viewContentsConsumerElectronics",
  cnfViewContentsConsumerElectronicsUrl: "#cnf_viewContentsConsumerElectronicsUrl",
  cnfViewDeviceManagermentSetting: "#cnf_viewDeviceManagermentSetting"
};

/**
 * contents画面の各イベントの宣言
 * @type object
 */
var contentsConsumerElectronicsEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    showDialog();
    this.cnfViewContentsConsumerElectronicsClick();
    this.cnfViewDeviceManagermentSettingClick();
  },

  /**
   * 機器管理設定をクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfViewDeviceManagermentSettingClick: function () {
    $(contentsConsumerElectronicsElement.cnfViewDeviceManagermentSetting).on("click", function () {
      var $consumerElectronics = $(this);      
      var url = $(contentsConsumerElectronicsElement.cnfViewContentsConsumerElectronicsUrl).val();
      location.href = url;
    });
  },

  /**
   * お知らせ通知ボタンスイッチをクリックするイベント
   * @param {null}
   * @return {null}
   */
  cnfViewContentsConsumerElectronicsClick: function () {
    $(contentsConsumerElectronicsElement.cnfViewContentsConsumerElectronics).on("click", function () {
      var $morningNightLinkedSetting = $(this);
      commonEvent.configCommonDisableScreen();
      var urlUpdate = $morningNightLinkedSetting.data("url");
      var url = urlUpdate + "&morningNightLinkedSetting=" + Number($morningNightLinkedSetting.prop('checked'));

      commonEvent.configCommonWriteLogSwitch($morningNightLinkedSetting);
      commonEvent.configCommonSwitchAjax(url, SWITCH_TYPE, $morningNightLinkedSetting);
    });
  }
};
//</editor-fold>
/**
 * 表示カード選択画面のjs
 */
//<editor-fold defaultstate="collapsed" desc="viewContentsCardDisplaySetting">
/**
 * 確認ダイアログ画面の各要素の宣言
 * @type object
 */
var viewContentsCardDisplaySettingElement = {
  cnfViewCardSettingToggleButton: ".cnf_contentsCardDisplaySetting",
  cnfDialogCancelButton: "#config_confirm_dialog_cancel",
  cnfDialogOkButton: "#config_confirm_dialog_ok",
  cnfAddPartnerButton: "#cnf_btn_addPartner",
  cnfConfirmDialog: "#config_confirm_dialog",
  cnfConfirmDialogMassage: "#config_confirm_massage",
}

/**
 *
 * @type object
 */
var viewContentsCardDisplaySettingEvent = {
  /**
   * イベントの初期化
   * @param {null}
   * @return {null}
   */
  init: function () {
    this.configViewCardSettingToggleClick();
    this.configConfirmDialogCancelClick();
    this.configConfirmDialogOkClick();
  },
  /**
   * カード表示設定のスイッチを押下する時に確認ダイアログを表示する共通処理
   * @param {null}
   * @return {null}
   */
  configViewCardSettingToggleClick: function () {
    $(viewContentsCardDisplaySettingElement.cnfViewCardSettingToggleButton).on("click", function (event) {
      var $switch = $(this).find('input.cnf_toggle');
      event.preventDefault();
      $(viewContentsCardDisplaySettingElement.cnfDialogCancelButton).data('switch-id', $switch.attr('id'));
      $(viewContentsCardDisplaySettingElement.cnfDialogOkButton).data('switch-id', $switch.attr('id'));
      if ($switch.prop('checked')) {
        // on => off
        cmnWriteAccessLog($switch.data('taplog-off'));
        $(viewContentsCardDisplaySettingElement.cnfConfirmDialogMassage).html($switch.data('massage-off'));
        $(viewContentsCardDisplaySettingElement.cnfDialogCancelButton).data('log-off', $switch.data('log-offcc'));
        $(viewContentsCardDisplaySettingElement.cnfDialogOkButton).data('log-off', $switch.data('log-offok'));
        $(viewContentsCardDisplaySettingElement.cnfDialogOkButton).data('url', $switch.data('url-off'));
        $(viewContentsCardDisplaySettingElement.cnfConfirmDialog).show(0, function () {
          var scrollpos = $(window).scrollTop();
          $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
        });
      } else {
        // off => on
        cmnWriteAccessLog($switch.data('taplog-on'));
        $(viewContentsCardDisplaySettingElement.cnfConfirmDialogMassage).html($switch.data('massage-on'));
        $(viewContentsCardDisplaySettingElement.cnfDialogCancelButton).data('log-on', $switch.data('log-oncc'));
        $(viewContentsCardDisplaySettingElement.cnfDialogOkButton).data('log-on', $switch.data('log-onok'));
        $(viewContentsCardDisplaySettingElement.cnfDialogOkButton).data('url', $switch.data('url-on'));
        $(viewContentsCardDisplaySettingElement.cnfConfirmDialog).show(0, function () {
          var scrollpos = $(window).scrollTop();
          $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
        });
      }
    });
  },

  /**
   * スイッチの確認ダイアログのキャンセルボタンをクリックする時の共通処理
   * @param {null}
   * @return {null}
   */
  configConfirmDialogCancelClick: function () {
    $(viewContentsCardDisplaySettingElement.cnfDialogCancelButton).on("click", function () {
      cmnWriteAccessLog(($(this).data('log-on')) ? $(this).data('log-on') : $(this).data('log-off'));
      $(this).data('log-on', '');
      $(this).data('log-off', '');
      commonEvent.configCommonCloseDialog();
    });
  },

  /**
   * スイッチの確認ダイアログのOKボタンをクリックする時の共通処理
   * @param {null}
   * @return {null}
   */
  configConfirmDialogOkClick: function () {
    $(viewContentsCardDisplaySettingElement.cnfDialogOkButton).on("click", function () {
      cmnWriteAccessLog(($(this).data('log-on')) ? $(this).data('log-on') : $(this).data('log-off'));
      var switchId = $(this).data('switch-id');
      var thisCheckBox = $('input#'+switchId);
      commonEvent.configCommonSwitchRollback(thisCheckBox);
      commonEvent.configCommonDisableScreen();
      commonEvent.configCommonSwitchAjax($(this).data("url"), SWITCH_TYPE, thisCheckBox);
    });
  }
}
//</editor-fold>
"use strict";
/**
 * jquery機能の初期化
 */
jQuery(document).ready(function () {
  commonEvent.init();
  confirmDialogEvent.init();
  infoDialogEvent.init();
  checkboxDialogEvent.init();
  radioDialogEvent.init();
  addressInfoEvent.init();
  contentsAreaEvent.init();
  contentsEvent.init();
  contentsDocomoNoticeEvent.init();
  contentsLeisureInfoEvent.init();
  contentsScheduleEvent.init();
  contentsShoppingMemoEvent.init();
  contentsTrafficRouteEvent.init();
  contentsWeatherEvent.init();
  deletePointSelectEvent.init();
  homeStationEvent.init();
  informationEvent.init();
  informationRejectTimeEvent.init();
  partnersEvent.init();
  partnerEvent.init();
  pointIndexEvent.init();
  pointSelectEvent.init();
  pointSelectMapEvent.init();
  pointSettingEvent.init();
  pointsSelectEvent.init();
  profileEvent.init();
  profileExtendItemsResetEvent.init();
  profileNicknameEvent.init();
  radioItemEvent.init();
  roadEvent.init();
  routeEvent.init();
  searchEvent.init();
  freeWordSearchResultEvent.init();
  contentsConsumerElectronicsEvent.init();
  viewContentsCardDisplaySettingEvent.init();
});
/**
 * 元画面の移動
 */
window.onpageshow = function (event) {
  var url = location.href;
  if (event.persisted && url.indexOf(VIEW_SEARCH) == -1) {
    window.location.reload();
  }
};

/**
 * ダイアログ表示
 * @param {null}
 * @return {null}
 */
function showDialog() {
    var dialogType = getParam("dialogType");
    if (dialogType) {
      var selector = "#config_info_dialog" + dialogType;
      $(selector).show(0, function () {
        var scrollpos = $(window).scrollTop();
        $(common.htmlBody).addClass('freezeScroll').css({'top': -scrollpos});
      });
    }
}
/**
 * GETパラメータ取得
 * @param {string} GETパラメータ名
 * @return {string} パラメータ名に対応した値 
 */

function getParam( paramName ) {
    var url   = location.href;
    parameters    = url.split("?");
    params   = parameters[1].split("&");
    var paramsArray = [];
    for ( i = 0; i < params.length; i++ ) {
      neet = params[i].split("=");
      paramsArray.push(neet[0]);
      paramsArray[neet[0]] = neet[1];
    }
    return paramsArray[paramName];
}
