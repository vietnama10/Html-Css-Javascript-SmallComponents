/**
 */
// <editor-fold defaultstate="collapsed" desc="common">

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

var commonEvent = {

  init: function () {
    this.configCommonErrorDialogOkBtnClick();
    this.configCommonAddModal();
  },

  configCommonAddModal: function () {
    $('<div class=modal></div>').hide().appendTo('body');
  },

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

  configCommonDisableScreen: function () {
    $(common.modal).show();
    $(common.htmlBody).addClass("disabledbutton");
  },

  configCommonEnableScreen: function () {
    $(common.modal).hide();
    $(common.htmlBody).removeClass("disabledbutton");
  },

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

  configCommonSwitchRollback: function (checkbox) {
    checkbox.prop('checked', !(checkbox.prop('checked')));
  },

  configPushSettingSwitchOn: function (checkbox) {
    checkbox.prop({'checked': true, 'disabled': false}).parent().removeClass('cnf_toggle_disable_off cnf_toggle_disable_on').siblings('.cnf_flex-box-1').removeClass('cnf_font_disable');
  },

  configPushSettingSwitchOff: function (checkbox) {
    checkbox.prop({'checked': false, 'disabled': true}).parent().addClass('cnf_toggle_disable_off').siblings('.cnf_flex-box-1').addClass('cnf_font_disable');
  },

  configPushSettingSwitchSave: function (checkbox) {
    checkbox.data({'value': Number(checkbox.prop('checked')),'disabled': Number(checkbox.prop('disabled'))});
  },
  
  configPushSettingSwitchRollback: function (checkbox) {
    checkbox.prop({'checked': Boolean(checkbox.data('value')), 'disabled': Boolean(checkbox.data('disabled'))});
    var disabledClass = checkbox.prop('checked') ? 'cnf_toggle_disable_on' : 'cnf_toggle_disable_off';
    if (checkbox.prop('disabled')) {
      checkbox.parent().addClass(disabledClass).siblings('.cnf_flex-box-1').addClass('cnf_font_disable');
    } else {
      checkbox.parent().removeClass('cnf_toggle_disable_on cnf_toggle_disable_off').siblings('.cnf_flex-box-1').removeClass('cnf_font_disable');
    }
  },

  configCommonSwitchAjax: function (url, objectType, object) {
    $.ajax({
      type: "POST",
      url: url,
      timeout: 10000,
      success: function (value) {
        if (!commonEvent.configCommonShowError(value, objectType, object)) {
          commonEvent.configCommonCloseDialog();
        }
      },
      error: function () {
        commonEvent.configCommonShowError(JSON_ERROR, objectType, object);
      }
    });
  },

  configCommonShowError: function (value, dialogType, dialogObject) {
    commonEvent.configCommonEnableScreen();
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

  configCommonWriteLogSwitch: function (object) {
    cmnWriteAccessLog(object.data(object.prop("checked") ? 'log-on' : 'log-off'));
  },

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


"use strict";

jQuery(document).ready(function () {
  commonEvent.init();
});

// </editor-fold>

window.onpageshow = function (event) {
  var url = location.href;
  if (event.persisted && url.indexOf(VIEW_SEARCH) == -1) {
    window.location.reload();
  }
};

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
