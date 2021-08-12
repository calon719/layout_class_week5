$(document).ready(function () {
  // modal
  $(".modal-toggle").click(function (e) {
    event.preventDefault();

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

  $(".modal").click(function (e) {
    let modalDialog = $(".modal-dialog");
    if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0) {
      let status = $(this).attr("data-modal-toggle");

      if (status === "true") {
        $(this).fadeOut().attr("data-modal-toggle", "false");
      }
    }
  });

  $(".modal-dialog *[data-modal-close='closeBtn']").click(function (e) {
    e.preventDefault();
    let status = $(this).parents(".modal").attr("data-modal-toggle");
    if (status === "true") {
      $(".modal").fadeOut().attr("data-modal-toggle", "false");
    }
  });
});
