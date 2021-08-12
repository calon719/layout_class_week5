$(document).ready(function () {
  // modal
  $("body").on("click", ".modal-toggle", function (e) {
    e.preventDefault();

    let modalOpened = $(document).find(".modal[data-modal-toggle='true']");
    let target = $(this).attr("data-modal-target");
    let status = $("#" + target).attr("data-modal-toggle");
    $(modalOpened).fadeOut().attr("data-modal-toggle", "false");

    if (status === "false") {
      $("#" + target)
        .fadeIn()
        .attr("data-modal-toggle", "true");
    }
  });

  $("body").on("click", ".modal", function (e) {
    let modalDialog = $(".modal-dialog");
    if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0) {
      let status = $(this).attr("data-modal-toggle");

      if (status === "true") {
        $(this).fadeOut().attr("data-modal-toggle", "false");
      }
    }
  });

  $("body").on("click", ".modal-dialog *[data-modal-close='closeBtn']", function (e) {
    e.preventDefault();
    let status = $(this).parents(".modal").attr("data-modal-toggle");
    if (status === "true") {
      $(".modal").fadeOut().attr("data-modal-toggle", "false");
    }
  });

  // id 順序反轉
  $("#reverseBtn").click(function (e) {
    event.preventDefault();
    let trAry = $("#reverseBtn").parents("thead").siblings("tbody").children("tr");
    let newTrAry = $.map(trAry, function (item, i) {
      return trAry[trAry.length - 1 - i];
    });
    $("#reverseBtn").parents("thead").siblings("tbody").empty();
    $.each(newTrAry, function (i, item) {
      $("#reverseBtn").parents("thead").siblings("tbody").append(item);
    });
  });
});
