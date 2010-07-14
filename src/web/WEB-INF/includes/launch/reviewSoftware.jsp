<%@ include file="/WEB-INF/includes/taglibs.jsp" %>

<!-- tabHead -->
<div class="tabHead">
	<ul>
		<li class="current">Software</li>
		<li id="rswContestTypeName"></li>
	</ul>
	<a href="javascript:showPage('contestSelectionPage');" class="button6 draft"><span class="left"><span class="right">EDIT</span></span></a>								
	<div class="tr"></div>								
</div>

<!-- overviewBox -->
<div class="overviewBox">
	<table class="overviewData" cellpadding="0" cellspacing="0">
		<tr>
			<th>Contest Name :</th>
			<td><span id="rswContestName"></span><a href="javascript:showPage('contestSelectionPage');" class="tipLink"><img src="/images/penicon.gif" alt="Edit"/></a></td>
		</tr>
		<tr>
			<th>Project Name :</th>
			<td><span id="rswProjectName"></span><a href="javascript:showPage('contestSelectionPage');" class="tipLink"><img src="/images/penicon.gif" alt="Edit"/></a></td>
		</tr>
		<tr>
			<th>Billing Account :</th>
			<td><span id="rswBillingAccount"></span><a href="javascript:showPage('contestSelectionPage');" class="tipLink"><img src="/images/penicon.gif" alt="Edit"/></a></td>
		</tr>
		<tr>
			<th>Start :</th>
			<td><span id="rswStartDate"></span><a href="javascript:showPage('contestSelectionPage');" class="tipLink"><img src="/images/penicon.gif" alt="Edit"/></a></td>
		</tr>
	</table>
</div>
<!-- End .overviewBox -->

<!-- contentList -->
<div class="contentList">
	<dl>
		<dt>Detailed Requirements :</dt>
		<dd><span id="rswDetailedRequirements"></span><a href="javascript: showPage('overviewSoftwarePage');" class="tipLink"><img src="/images/penicon.gif" alt="Edit"/></a> </dd>		

		<dt>Software Guidelines :</dt>
		<dd><span id="rswSoftwareGuidelines"></span><a href="javascript: showPage('overviewSoftwarePage');" class="tipLink"><img src="/images/penicon.gif" alt="Edit"/></a> </dd>		
	</dl>
</div>
<!-- end .contentList -->
              
<div class="cboxOut">
              	
  <!-- title -->
	<h3>Files: </h3>
                  
  <!-- cboxFiles -->
	<div class="cbox" id="swCboxFiles">		
		<dl id="swDocUploadList">
		</dl>                      
    <a href="javascript: showPage('overviewSoftwarePage');" class="tipLink"><img src="/images/penicon.gif" alt="Edit"/></a>		
</div>
<!-- end #cboxFiles -->
                  
</div>

<!-- prizes -->
<div class="prizes">
    <h3>Contest Prizes:</h3>
    
    <div class="prizesInner">
        <label class="first">1st Place</label>
        <span class="dw">$</span>
        <span class="numberDor"><span id="rswFirstPlaceCost"></span></span>
        <label class="second">2nd Place</label>
        <span class="dw">$</span>
        <span class="numberDor"><span id="rswSecondPlaceCost"></span></span>
        <a href="javascript: showPage('overviewSoftwarePage');" class="tipLink"><img src="/images/penicon.gif" alt="Edit"/></a>        
    </div>    
</div>
<!-- end .prizes -->


<!-- Final Deliverables -->
<div class="deliverables">

    <h3>Links:</h3>
    
    <div class="deliverablesInner">
        <div class="checkInput" id="rswLinks" >
        </div>
        
        <a href="javascript: showPage('overviewSoftwarePage');" class="tipLink"><img src="/images/penicon.gif" alt="Edit"/></a>
        
        <div class="clear"></div>
        
    </div>
    
</div>
<!-- end .deliverables -->

<div class="buttonBox">	
    <a href="javascript:continueReview();" class="button6 contiune"><span class="left"><span class="right">CONTINUE</span></span></a>
    <a href="javascript:saveAsDraftReview();" class="button6 draft"><span class="left"><span class="right">SAVE AS DRAFT</span></span></a>
		<a href="javascript:previewContest();" class="button6 preview"><span class="left"><span class="right">PREVIEW</span></span></a>  
    <a href="javascript:cancelContest();" class="button6 preview"><span class="left"><span class="right">CANCEL</span></span></a>
    <a href="javascript:backReview();" class="button6 preview"><span class="left"><span class="right">BACK</span></span></a>		
</div>