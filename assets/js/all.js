"use strict";

$(document).ready(function () {
  // modal
  $("body").on("click", ".modal-toggle", function (e) {
    e.preventDefault();
    var modalOpened = $(document).find(".modal[data-modal-toggle='true']");
    var target = $(this).attr("data-modal-target");
    var status = $("#" + target).attr("data-modal-toggle");
    $(modalOpened).fadeOut().attr("data-modal-toggle", "false");

    if (status === "false") {
      $("#" + target).fadeIn().attr("data-modal-toggle", "true");
    }
  });
  $("body").on("click", ".modal", function (e) {
    var modalDialog = $(".modal-dialog");

    if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0) {
      var status = $(this).attr("data-modal-toggle");

      if (status === "true") {
        $(this).fadeOut().attr("data-modal-toggle", "false");
      }
    }
  });
  $("body").on("click", ".modal-dialog *[data-modal-close='closeBtn']", function (e) {
    e.preventDefault();
    var status = $(this).parents(".modal").attr("data-modal-toggle");

    if (status === "true") {
      $(".modal").fadeOut().attr("data-modal-toggle", "false");
    }
  }); // id 順序反轉

  $("#reverseBtn").click(function (e) {
    event.preventDefault();
    var tbody = $("#reverseBtn").parents("thead").siblings("tbody");
    var trAry = tbody.children("tr");
    var newTrAry = $.map(trAry, function (item, i) {
      return trAry[trAry.length - 1 - i];
    });
    $("#reverseBtn span").toggleClass("transform rotate-180");
    tbody.empty();
    $.each(newTrAry, function (i, item) {
      tbody.append(item);
    });
  });
});
//# sourceMappingURL=all.js.map
