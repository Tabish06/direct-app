/**
 * Copyright (C) 2010 - 2011 TopCoder Inc., All Rights Reserved.
 *
 * Launch Contest Javascript
 *
 * Veresion 1.1 TC Direct - Software Creation Update Assembly change notes:
 * - Add form reset to prevent firefox from caching local form data. This is intended to make selections consistent.
 * - Bind change event to project dropdown to dynamically load copilots of the selected project
 * - Add method isCopilotDropDownHidden to check if the copilot dropdown is hidden
 * - Add method handleProjectDropDownChange for project dropdown change event
 * 
 * Version 1.1 TC Direct Replatforming Release 1 change note
 * - Changes were made to work for the new studio contest type and multiround type.
 * 
 * Version 1.2 TC Direct Replatforming Release 2 change note
 * - The software contest can set milestone prizes.
 *
 * Version 1.3 Direct Improvements Assembly Release 2 Assembly change note
 * - Add character limitation for the input fields and input areas when creating contests.
 *
 * Version 1.3.1 Release Assembly - TC Direct UI Improvement Assembly 3 change note:
 * - fix catalog dropdown style, term & conditions modal window
 *
 * Version 1.4 Release Assembly - TopCoder Cockpit TinyMCE Editor Revamp change note:
 * - integrate the new cockpit tinyMCE editor
 *
 * Version 1.5 (Release Assembly - TopCoder Bug Hunt Assembly Integration 2) change notes:
 * - Add the handle of "auto bug hunt creation" checkbox for assembly contest
 *
 * Version 1.6 (Release Assembly - TopCoder Studio CCA Integration) change notes:
 * - Add place holder support for tinyMCE editors for sutdio contest description, round1 info
 * - and round2 info fields.
 *
 * Version 1.7 (Release Assembly - TopCoder Cockpit Billing Account Project Association)
 * - Add js to populate billing accounts based on project selection.
 *
 * @author GreatKevin
 * @version 1.7
 */
$(document).ready(function() {

    // reset the fake form to prevent Firefox from caching local form data
    document.getElementById("fakeForm").reset();

    // Drop Down Select Project
    $(".dropdown dt a").click(function() {
        $(".dropdown dd ul").toggle();
        return false;
    });

    $(".dropdown dd ul li a").click(function() {
        var text = $(this).html();
        $(".dropdown dt a span").html(text);
        $(".dropdown dd ul").hide();
        $("#result").html("Selected value is: " + getSelectedValue("sample"));
        return false;
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("dropdown"))
            $(".dropdown dd ul").hide();
    });

    // Drop Down Sort Contests
    $(".dropdown2 dt a").click(function() {
        $(".dropdown2 dd ul").toggle();
        return false;
    });

    $(".dropdown2 dd ul li a").click(function() {
        var text = $(this).html();
        $(".dropdown2 dt a span").html(text);
        $(".dropdown2 dd ul").hide();
        $("#result").html("Selected value is: " + getSelectedValue("sample2"));
        $('#scrollbar-wrapper').jScrollPane({showArrows:true, scrollbarWidth: 17});
        return false;
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value2").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("dropdown2"))
            $(".dropdown2 dd ul").hide();
    });

    // Drop Down Search
    $(".dropdown3 dt a").click(function() {
        $(".dropdown3 dd ul").toggle();
        return false;
    });

    $(".dropdown3 dd ul li a").click(function() {
        var text = $(this).html();
        $(".dropdown3 dt a span").html(text);
        $(".dropdown3 dd ul").hide();
        $("#result").html("Selected value is: " + getSelectedValue("sample"));
        return false;
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value3").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("dropdown3"))
            $(".dropdown3 dd ul").hide();
    });

    $("a.link-sort").click(function() {
        var toLoad = $(this).attr('href');
        $('#scrollbar-wrapper div').hide('fast', loadContent);
        $('#load').remove();
        $('#scrollbar-wrapper div').append('<div id="load"></div>');
        $('#load').fadeIn('slow');
        window.location.hash = $(this).attr('href').substr(0, $(this).attr('href').length - 5);
        function loadContent() {
            $('#scrollbar-wrapper div').load(toLoad, '', showNewContent());
        }

        function showNewContent() {
            $('#scrollbar-wrapper div').show(0.001, hideLoader());
        }

        function hideLoader() {
            $('#load').fadeOut('slow');
        }
    });


    $("#expand-table").click(function() {
        $("#collapse-table").show();
        $(".row-hide").slideDown(0.0001);
        $(this).hide();
        return false;
    });

    $("#collapse-table").click(function() {
        $("#expand-table").show();
        $(".row-hide").slideToggle(0.0001);
        $(this).hide();
        return false;
    });

    $('#scrollbar-wrapper').jScrollPane({showArrows:true, scrollbarWidth: 17});
    $(".table-sidebar tr:odd").addClass("alt");
    $(".table-summary-content tr:even").addClass("alt");
    $("#collapse-table").hide();
    $(".row-hide").slideToggle(0.0001);
    $("#wb-1").hide();
    $("#wb-2").hide();

    $(".greentext").click(function() {
        $("#wb-1").fadeTo("slow", 1.0);
        return false;
    });

    $(".redtext").click(function() {
        $("#wb-2").fadeTo("slow", 1.0);
        return false;
    });

    $("a.btn-list").hover(function() {
        var $next = $(this).next(".dialog-mini-wrapper");
        $next.css("display", "block");
        $next.hover(function() {
            $next.css("display", "block");
        }, function() {
            $next.css("display", "none");
        });
    }, function() {
        var $next = $(this).next(".dialog-mini-wrapper");
        $next.css("display", "none");
    });

    /* init tab **/
    $('#tab li').click(function() {

        $('#tab li a').removeClass('current');
        $(this).find('a').addClass('current');
        if ($(this).attr('class') == 'top') {
            $('.selectDesing').show();
            $('.selectSoftware').addClass('visibility');
        } else {
            $('.selectDesing').hide();
            $('.selectSoftware').removeClass('visibility');
        }

    });

    $("#milestoneDateDay").val(3).trigger('change');
    $("#endDateDay").val(3).trigger('change');

    /* init pop */
    var prevPopup = null;
    showPopup = function(myLink, myPopupId) {
        var myLinkLeft = myLinkTop = 0;

        /* hide the previous popup */
        if (prevPopup)
            $(prevPopup).css("display", "none");

        prevPopup = $('#' + myPopupId);

        /* get the position of the current link */
        do{
            myLinkLeft += myLink.offsetLeft;
            myLinkTop += myLink.offsetTop;
        } while (myLink = myLink.offsetParent);

        /* set the position of the popup */
        var popUpHeight2 = $('#' + myPopupId).height() / 2;

        myLinkTop -= popUpHeight2;

        $('#' + myPopupId).css("top", (myLinkTop + 4) + 'px');
        $('#' + myPopupId).css("left", ( myLinkLeft + 22 ) + 'px');

        /* set the positio of the arrow inside the popup */
        $(".tooltipContainer SPAN.arrow").css("top", popUpHeight2 + 'px');

        /* show the popup */
        $('#' + myPopupId).css("display", "block");

    }

    var prevPopups = null;
    showPopups = function(myLinks, myPopupIds) {
        var myLinkLefts = myLinkTops = 0;

        /* hide the previous popup */
        if (prevPopups)
            $(prevPopups).css("display", "none");

        prevPopups = $('#' + myPopupIds);

        /* get the position of the current link */
        do{
            myLinkLefts += myLinks.offsetLeft;
            myLinkTops += myLinks.offsetTop;
        } while (myLinks = myLinks.offsetParent);

        /* set the position of the popup */
        var popUpHeight2s = $('#' + myPopupIds).height() / 2;

        myLinkTops -= popUpHeight2s;

        $('#' + myPopupIds).css("top", (myLinkTops + 4) + 'px');
        $('#' + myPopupIds).css("left", ( myLinkLefts + 104 ) + 'px');

        /* set the positio of the arrow inside the popup */
        $(".tooltipContainer SPAN.arrow").css("top", popUpHeight2s + 'px');

        /* show the popup */
        $('#' + myPopupIds).css("display", "block");

    }

    $('#ContestScheduleHelpIcon .helpIcon').hover(function() {
        showPopup(this, 'contestScheduleToolTip');
    }, function() {
        $('#contestScheduleToolTip').hide();
    });

    $('#ContestDescriptionHelpIcon .helpIcon').hover(function() {
        showPopup(this, 'contestDescriptionToolTip');
    }, function() {
        $('#contestDescriptionToolTip').hide();
    });

    $('#cca .helpme').hover(function() {
        showPopup(this, 'enforceCCAToolTip');
    }, function() {
        $('#enforceCCAToolTip').hide();
    });

    $('#assembly_bug_hunt .helpme').hover(function () {
        showPopup(this, 'bugHuntForAssemblyToolTip');
    }, function () {
        $('#bugHuntForAssemblyToolTip').hide();
    });

    $('#Round1HelpIcon .helpIcon').hover(function() {
        showPopup(this, 'contestRound1ToolTip');
    }, function() {
        $('#contestRound1ToolTip').hide();
    });

    $('#Round2HelpIcon .helpIcon').hover(function() {
        showPopup(this, 'contestRound2ToolTip');
    }, function() {
        $('#contestRound2ToolTip').hide();
    });

    $('.selectDesing .help,.selectSoftware .help').hover(function() {
        showPopups(this, 'contestLaunch1');
    }, function() {
        $('#contestLaunch1').hide();
    });

    $('.mPrizes .helpIcon').hover(function() {
        showPopup(this, 'contestLaunch2');
    }, function() {
        $('#contestLaunch2').hide();
    });

    $('.deliverables .helpIcon').hover(function() {
        showPopup(this, 'contestLaunch3');
    }, function() {
        $('#contestLaunch3').hide();
    });

    $('.TB_overlayBG').css("opacity", "0.6");
    $('#TB_HideSelect').css("opacity", "0");
    $('#TB_overlay').hide();
    /* init help */
    $('.helloUser .help,.tabContest .moreLink,.help .helpIcon').click(function() {
        $('#TB_overlay').show();
        $('#TB_window').show();
        $('.TB_overlayBG').css('height', document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight);
        $('#TB_window').css('margin', '0 auto 0 ' + parseInt((document.documentElement.clientWidth / 2) - ($("#TB_window").width() / 2)) + 'px');


        $('#placeHolder').hide();
        $('#TB_ajaxContent').show();
    });

    $('#TB_closeWindowButton').click(function() {
        $('#TB_overlay').hide();
        $('#TB_window').hide();
    });

    /* add button */
    $('.uploadInner .addButton').click(function() {
        $(this).parent().after('<div class="uploadInner" style="margin-top:12px;"><input type="text" class="text uploadInput" value="File Name" /><a href="javascript:;" class="button6"><span class="left"><span class="right">CHOOSE...</span></span></a><input type="text" class="text fileInput" value="File Description" /><a href="javascript:;" class="removeButton"><span class="hide">REMOVE</span></a><a href="javascript:;" class="addButton"><span class="hide">ADD</span></a></div>');
    });

    $('.uploadInner .removeButton').click(function() {
        if ($(this).parent().parent().find('.uploadInner').length > 1) {
            $(this).parent().parent().find('.uploadInner:last').remove();
        }
    });

    /* bigframe */
    $('#TB_overlay').bgiframe();
    //$('#TB_window').scrollFollow({offset: parseInt((document.documentElement.scrollHeight / 2) - (parseInt($("#TB_window").css('height')) / 2))});

    $(".uploadInner .button6").click(function() {
        $(".uploadInner .fileIn").trigger("click")
    })

    /********************************
     *   Launch Contest Main Widget
     ********************************/

    // initialize selects
    // populate the select option for software group
    $.each(projectCategoryArray, function(i, projectCategory) {
        // not show copilot contest type
        if (projectCategory.id != 29 && projectCategory.typeId != 3) {
            $("<option/>").val("SOFTWARE" + projectCategory.id).text(projectCategory.label).appendTo("optgroup[label='Software']");
        }
        if (projectCategory.typeId == 3) {
        	$("<option/>").val("STUDIO"+projectCategory.id).text(projectCategory.label).appendTo("optgroup[label='Studio']");
        }
    });
    

    if ($('select').length > 0) {
        $('.selectSoftware select,.selectDesing select,.startSelect select,.milestoneSelect select,.endSelect select, .cardSelect select, .selectMonth select, .selectYear select').sSelect();
        var SelectOptions = {
            ddMaxHeight: '220px',
            yscroll: true
        };
        $('.billingSelect select,.roundelect select,.startEtSelect select,.milestoneEtSelect select,.endEtSelect select').sSelect(SelectOptions);
        $('.projectSelect select').sSelect(SelectOptions).change(function() {
             handleProjectDropDownChange();
        });
        //$('#catalogSelect').sSelect();
        $('.selectDesing div.selectedTxt').html('Select Contest Type');
        $("#mileStoneDiv").hide();
    }

    /* Optgroup 2 columns fix */
    if ($('.selectDesing optgroup, .selectDesign .newListOptionTitle').length > 0) {
        var optgroupMaxHeight = 0, num;

        $('.selectDesing optgroup').each(function() {
            num = $(this).children().length + 1;
            optgroupMaxHeight = num * 22 > optgroupMaxHeight ? num * 22 : optgroupMaxHeight;
        });

        $('.selectDesing .newList').css('height', optgroupMaxHeight + 'px');

        $(window).resize(function() {
            $('.selectDesing .newList').css('height', optgroupMaxHeight + 'px');
        });
        $(window).scroll(function() {
            $('.selectDesing .newList').css('height', optgroupMaxHeight + 'px');
        });
    }


    /*****************************
     *   Select Contest Type
     ****************************/

    // choose contest type
    $('#contestTypes').bind("change", function() {
        onContestTypeChange();
    });
    onContestTypeChange();


    $('#billingProjects').bind("change", function() {
        updateContestFee();
    });

    $('#addNewProject').click(function() {
        clearAddNewProjectForm();
        modalLoad("#addNewProjectModal");
        $('#addNewProjectModal').find('input[name="newProjectName"]').focus();
    });

    // round types
    $('#roundTypes').bind("change", function() {
        var roundType = $('#roundTypes').val();
	updateRoundDurationLabels();
        if(roundType == 'single') {
           $('#mileStoneDiv').hide();
           $('#milestonePrizeDiv').hide();
           $('#swMilestonePrizeDiv').hide();
           $('#round1InfoDiv').hide();
           $('#round2InfoDiv').hide();
        } else {
           $('#mileStoneDiv').show();
           $('#milestonePrizeDiv').show();           
           $('#swMilestonePrizeDiv').show();
           $('#round1InfoDiv').show();
           $('#round2InfoDiv').show();
        }
    });
    $('#roundTypes').trigger("change");

    /* init date-pack */
    if ($('.date-pick').length > 0) {
        $(".date-pick").datePicker().val($.trim($("#currentServerDate").text())).trigger('change');
    }

	setupTinyMCEWithTemplateAndPlaceHoder('contestDescription', 10000, "Only members that register for this contest will see this description.", "studio_templates_list");
    setupTinyMCEWithTemplate('contestIntroduction', 2000);
	setupTinyMCEWithTemplateAndPlaceHoder('round1Info', 2000, 'Only members that register for this contest will see this description.');
	setupTinyMCEWithTemplateAndPlaceHoder('round2Info', 2000, 'Only members that register for this contest will see this description.');
	setupTinyMCEWithTemplateAndHeight('swDetailedRequirements', 12000, "software_templates_list", "240");
	setupTinyMCEWithHeight('swGuidelines', 2048, "240");

    handleProjectDropDownChange();

}); // end of jQuery onload

//capacity dates
var capacityFullDates = {};

// flag to indicate copilot dropdown initialization
var copilotDropdownFlag = false;

// method to populate copilots selection based on the project selection change
function handleProjectDropDownChange() {
    var value = $('.projectSelect select').getSetSSValue();

    var billingAccounts = getBillingAccountsByDirectProjectId(value);

    $("#billingProjects").empty();
    $("#billingProjects").append($('<option></option>').val(0).html("Please select an existing account"));

    $.each(billingAccounts, function(key, value) {
        $("#billingProjects").append($('<option></option>').val(key).html(value));
    });
    $("#billingProjects").val(0);
    $("#billingProjects").resetSS();
    $("#billingProjects").getSetSSValue(0);

    if(value > 0) {
        $("a.addBilling").show();
        $("a.addBilling").attr("href", "../editProject?formData.projectId=" + value + "#addBillingAccount");
    } else {
        $("a.addBilling").hide();
        $("a.addBilling").attr("href", "javascript:;");
    }

    var result = getCopilotsByDirectProjectId(value);

    var copilots = result.copilots;
    var selected = result.selected;
    var $contestCopilots = $("#contestCopilot");

    $contestCopilots.html("");

    $contestCopilots.append($('<option></option>').val(0).html("Unassigned"));

    $.each(copilots, function(key, value) {
        $contestCopilots.append($('<option></option>').val(key).html(value));
    });

    // set the selection drop down value
    $contestCopilots.val(selected);

    // we only refresh stylish selection when it's not hidden
    $('.copilotSelect select').resetSS();
    $('.copilotSelect select').getSetSSValue(selected);
}

function updateRoundDurationLabels() {
	var contestType = getContestType(true)[0];
	var roundType = $('#roundTypes').val();
    if(contestType == "SOFTWARE") {
		$("#mileStoneDiv label").html("Milestone Duration:");
	} else {
		if (roundType == "single") {
			$("#endDiv label").html("Round 1 Duration:");
		} else {
			$("#mileStoneDiv label").html("Round 1 Duration:");
			$("#endDiv label").html("Round 2 Duration:");
		}
	}
}

/**
 * event handler function when contest type is changed.
 */
function onContestTypeChange() {
       var contestType = getContestType(true)[0];
       var typeId = getContestType(true)[1];
       var currentTypeId = -1;
       if(isContestSaved()) {
          currentTypeId = mainWidget.softwareCompetition.projectHeader.projectCategory.id;
       }

    if(typeId == 14 && contestType == 'SOFTWARE') {
        // show the bug hunt check box and default set to checked
        $("#assembly_bug_hunt").show();
        $("#bug_hunt_CheckBox").attr('checked', 'checked');
    } else {
        $("#assembly_bug_hunt").hide();
        $("#bug_hunt_CheckBox").removeAttr('checked');
    }

    if (isContestSaved() && mainWidget.competitionType != contestType) {
        showErrors("You can not switch between studio and software after it is saved.");

        return;
    }

    updateRoundDurationLabels();
    mainWidget.competitionType = contestType;
    if (typeId == currentTypeId) {
        // it is a revert, nothing to do here
        return;
    }

       
       if (mainWidget.softwareCompetition.projectHeader.projectCategory && mainWidget.softwareCompetition.projectHeader.projectCategory.id > 0) {
    	   mainWidget.softwareCompetition.projectHeader.projectCategory.id = typeId;
       }
       
      $('.software').hide();
      $('.studio').hide();
      $(".schedule").css("margin-bottom","0px");

      if (hasMultiRound(typeId)) {
    	  $("#roundTypeDiv").show();
      } else {
    	  $("#roundTypeDiv").hide();
    	  $("#mileStoneDiv").hide();
    	  mainWidget.softwareCompetition.multiRound = false;
      }

      if (!copilotDropdownFlag) {
        // copilot dropdown has never been initialized, do it
        $('.copilotSelect select').sSelect(SelectOptions);
        copilotDropdownFlag = true;
      } else {
        // initialized before, we only do the reset to update the data
        $('.copilotSelect select').resetSS();
      }         

      /// Studio Contest
      if(mainWidget.isSoftwareContest()) {
         //Software Contest
         $('.software').show();
         $('.studio').hide();

        // the copilot dropdown options
        var SelectOptions = {
            ddMaxHeight: '220px',
            yscroll: true
        };

         if(typeId == SOFTWARE_CATEGORY_ID_DEVELOPMENT) {
         	  $('#contestName').hide();
         	  $('#contestNameFromDesign').show();
         	  $('#contestNameFromDesign').val("");
         	  $('#contestIdFromDesign').val("");
         	  $('#devOnlyDiv').show();
         	  $('#devOnlyDiv').css("display","inline");
         	  $('#devOnlyCheckBox').attr('checked', false);         	           	  
         } else {
         	  $('#contestName').show();
         	  $('#contestNameFromDesign').hide();
         	  $('#devOnlyDiv').hide();
         	  $('#devOnlyCheckBox').attr('checked', false);         	  
         }
      }

      if(mainWidget.isStudioContest()) {
          $('.software').hide();
          $('.studio').show();
          $('#roundTypes').trigger('change');

          $.each(studioSubtypeOverviews, function(i, overview) {
              if(overview.id == typeId) {
                 // update overview description
                 $('#contestDescriptionTooltip').html(overview.description);
              }
          });

          $.each(studioSubtypeFees, function(i, fee) {
               if(fee.id == typeId) {
                 // not set yet, auto fill
                 if(isEmpty($('#prize3').val())) {
                     $('#prize1').val(fee.firstPlaceCost)
                     $('#prize2').val(fee.secondPlaceCost)
                 }
              }
          });

          resetFileTypes(typeId);
          $(".schedule").css("margin-bottom","0px");

          getCapacityDatesForStudioSubType(getContestType(true)[1]);
      }
      updateContestFee();      
}

/**
 * Resets file types.
 *
 * @param studioSubtypeId studio sub type id
 */
function resetFileTypes(studioSubtypeId) {
    $('#deliverablesCheckboxs').html('');

    var types = getStudioFileTypes(studioSubtypeId);
    var html = "";
    $.each(types, function(i, type) {
        html += '<div><input type="checkbox" value="' + type.value + '" class="defaultFileType" /> <label>' + type.description + '</label></div>';
    });

    $('#deliverablesCheckboxs').html(html);
}

/**
 * Adds a new project.
 */
function addNewProject() {
    var projectName = $('#addNewProjectModal').find('input[name="newProjectName"]').val();
    var projectDescription = $('#addNewProjectModal').find('textarea[name="newProjectDescription"]').val();

    var errors = [];

    if (!checkRequired(projectName)) {
        errors.push('Project name is empty.');
    }

    if (!checkRequired(projectDescription)) {
        errors.push('Project description is empty.');
    }


    if (errors.length > 0) {
        showErrors(errors);
        $("#modal-background").hide();
        return;
    }


    $.ajax({
        type: 'POST',
        url:  "createProject",
        data: {'projectName':projectName,
            'projectDescription':projectDescription},
        cache: false,
        dataType: 'json',
        success: function(jsonResult) {
            handleJsonResult(jsonResult,
                            function(result) {
                                var projectData = result;
                                $("<option/>").val(projectData.projectId).text(projectData.name).appendTo("#projects");
                                $('#projects').resetSS();
                                $('#projects').change(function() {
                                    handleProjectDropDownChange();
                                });
                                $('#projects').getSetSSValue(projectData.projectId);

                                modalCloseAddNewProject();
                                showSuccessfulMessageWithOperation('Project <span class="messageContestName">' + projectData.name + '</span> is created successfully.', "VIEW PROJECT", function(){window.open ('/direct/projectOverview?formData.projectId=' + projectData.projectId,'_self',false);} );

                                // we need to clear the copilots options and set to unassigned for new created project
                                $("#contestCopilot").html("");
                                $("<option/>").val(0).text("Unassigned").appendTo("#contestCopilot");
                                $("#contestCopilot").resetSS();
                                $("#contestCopilot").getSetSSValue(0);
                                copilotDropdownFlag = true;
                            },
                            function(errorMessage) {
                                modalCloseAddNewProject();
                                showServerError(errorMessage);
                            });
        }
    });
}

function getCapacityDatesForStudioSubType(studioSubtypeId) {
    if (capacityFullDates[studioSubtypeId] == null) {
        var request = {
            studio : true,
            contestTypeId : studioSubtypeId
        };
        $.ajax({
            type: 'POST',
            url:  ctx + "/launch/getCapacityFullDates",
            data: request,
            cache: false,
            dataType: 'json',
            success: handleGetCapacityResult
        });
    }
}

function handleGetCapacityResult(jsonResult) {
    handleJsonResult(jsonResult,
                    function(result) {
                        var contestTypeId = result.contestTypeId;
                        var fullDates = result.fullDates;
                        capacityFullDates[contestTypeId] = fullDates;

                    },
                    function(errorMessage) {
                        showServerError(errorMessage);
                    });
}

function closeTBBox() {
    $('#TB_overlay').hide();
    $('#TB_window').hide();
    $('#TB_window div').remove();
}
