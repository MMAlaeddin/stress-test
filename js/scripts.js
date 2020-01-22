// front-end logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#hidden").show();
    $("form").hide();

    var warningSigns = [];
    var copingMechanisms = [];

    // $("input:checkbox[name=cognitive]:checked").each(function() {
    //   var cognitiveSign = $(this).val();
    //   warningSigns.push(cognitiveSign);
    // });

    // $("input:checkbox[name=physical]:checked").each(function() {
    //   var physicalSign = $(this).val();
    //   warningSigns.push(physicalSign);
    // });

    // $("input:checkbox[name=emotional]:checked").each(function() {
    //   var emotionalSign = $(this).val();
    //   warningSigns.push(emotionalSign);
    // });

    var blanks = ["cognitive", "physical", "emotional"];
    for (i=0; i<blanks.length; i++) {
      $("input:checkbox[name=" + blanks[i] + "]:checked").each(function() {
        var warningSign = $(this).val();
        warningSigns.push(warningSign);
      })
    }

    $("input:checkbox[name=coping]:checked").each(function() {
      var copingMechanism = $(this).val();
      copingMechanisms.push(copingMechanism);
    });

    numberOfWarnings = warningSigns.length;
    copingLength = copingMechanisms.length;


    if (numberOfWarnings >= 9) {
      $("#hidden").append("You may want to seek professional help for dealing with your stress!").addClass("red");
    } else if (numberOfWarnings > 4 && numberOfWarnings <= 8 && copingLength > 2) {
      $("#hidden").append("You seem to have a lot of stress, but are doing a good job of coping with your stress! You may want to seek professional help or additional coping mechanisms.")
    } else if (numberOfWarnings > 4 && numberOfWarnings <= 8 && copingLength <= 2) {
      $("#hidden").append("You seem to have a lot of stress and are not finding ways to cope with it.");
    } else if (numberOfWarnings < 4 && copingLength <= 2) {
      $("#hidden").append("You seem to have little stress, but could seek additional ways to manage the stress that you do have.");
    } else if (numberOfWarnings < 4 && copingLength > 2)
    $("#hidden").append("You seem to have a healthy lifestyle and good grasp on stress management.");
  });
});