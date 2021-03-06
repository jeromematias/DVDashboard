@extends('layouts.coreapp')
@section('css')
<link rel="stylesheet" href="css/data-entry.css">
<link href="css/buttons.dataTables.min.css" rel="stylesheet">
<style type="text/css">
  #breadcrumb2{
    margin-top: 55px;    
    list-style: none;
    padding-left: 23px;
  }
</style>
@stop
@section('breadcrumb')
<!-- Breadcrumb -->
<ol class="breadcrumb" id="breadcrumb1">
  <li class="breadcrumb-item text-dark">Converting : &nbsp;&nbsp;&nbsp;&nbsp; <a id="con-date">Last date loaded : loading</a></li>
  <li class="breadcrumb-item text-dark"><a id="con-status">loading status</a></li>
</ol>
<ol class="breadcrumb" id="breadcrumb2">
  <li class="breadcrumb-item text-dark">Validating : &nbsp;&nbsp;&nbsp;&nbsp; <a id="val-date">Last date loaded : loading</a></li>  
  <li class="breadcrumb-item text-dark"><a id="val-status">Manual : loading status</a></li>        
</ol>
@stop
@section('sidebar')
@include('layouts.sidebar')
@stop
@section('content')
<div class="row">
  <div class="col-md-12 mb-4" id="tabs">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#home" role="tab" aria-controls="home">Survey : <strong class="font-weight-bold" id="SurveyTabName">Singtel Cencus</strong></a>
      </li>      
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" id="home" role="tabpanel">
        <div class="row ml-auto" style="height: 70px;margin-top: 0px;width: 500px;">
          <div class="form-group col-sm-7">
            <label class="col-form-label col-form-label-sm col-sm-12" for="unit">Unit</label>
            <div class="col-sm-12">
              <select id="unit" name="unit" class="form-control form-control-sm">
                <option value="1">Converted Time (actual compared to x)</option>                
                <option value="2">Validated Time</option>                
                <option value="3">Reprocessed Y / N</option>                
              </select>
            </div>
          </div>
          <div class="form-group  col-sm-5">
            <label class="col-form-label  col-form-label-sm col-sm-12" for="days"># of Days</label>
            <div class="col-sm-12">
              <select id="days" name="days" class="form-control form-control-sm">
                <option value="7">7</option>
                <option value="14">14</option>
                <option value="31">31</option>
                <option value="60">60</option>
              </select>
            </div>
          </div>
        </div>        
        <div id="container" style="height: calc(100% - 80px);"></div>
      </div>      
    </div>
  </div>
</div>
@stop
@section('modals')
<!-- The Modal -->

<!--conversion-->
<div class="modal fade" id="modal-timeframe" style="height : 450px;">
  <div class="modal-dialog modal-md" style="height : calc(100% - 150px);">
    <div class="modal-content" style="height : 100%;">
      <!-- Modal Header -->
      <div class="modal-header bg-success">
        <strong class="modal-title text-dark">Update Conversion</strong>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <!-- Modal body -->
      <div class="modal-body" style="height: 100%;">        
        <div class="form-group">
          <label class="col-md-9 col-form-label" for="warningtime"><strong>Warning time</strong></label>
          <div class="col-md-12">
            <input type="text" class="form-control" id="warningtime">
          </div>
          <label class="col-md-9 col-form-label" for="errortime"><strong>Error time</strong></label>
          <div class="col-md-12">
            <input type="text" class="form-control" id="errortime">
          </div>
        </div>
      </div>
      <!-- Modal footer -->
      <div class="modal-footer bg-light">
        <button type="button" class="btn btn-light" id="savetimeframe">Save</button>
      </div>

    </div>
  </div>
</div>

<!-- validation -->
<div class="modal fade" id="modal-validation" style="height : 450px;">
  <div class="modal-dialog modal-md" style="height : calc(100% - 150px);">
    <div class="modal-content" style="height : 100%;">
      <!-- Modal Header -->
      <div class="modal-header bg-success">
        <strong class="modal-title text-dark">Update Validation</strong>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <!-- Modal body -->
      <div class="modal-body" style="height: 100%;">        
        <div class="form-group">
          <label class="col-md-9 col-form-label" for="validationwarning"><strong>Warning Minutes</strong></label>
          <div class="col-md-12">
            <input type="text" class="form-control" id="validationwarning">
          </div>
          <label class="col-md-9 col-form-label" for="validationerror"><strong>Error Minutes</strong></label>
          <div class="col-md-12">
            <input type="text" class="form-control" id="validationerror">
          </div>
        </div>
      </div>
      <!-- Modal footer -->
      <div class="modal-footer bg-light">
        <button type="button" class="btn btn-light" id="savevalidation">Save</button>
      </div>

    </div>
  </div>
</div>

@stop
@section('script')
<script type="text/javascript" src="js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="js/dataTables.bootstrap4.min.js"></script>
<script type="text/javascript" src="js/jQuery.print.js"></script>
<script type="text/javascript" src="js/jquery.floatThead.min.js"></script>
<script type="text/javascript" src="js/echarts3.js"></script>
<script type="text/javascript" src="js/modules.js"></script>
<script type="text/javascript" src="js/dashboard.js"></script>
@stop