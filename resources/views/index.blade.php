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
<ol class="breadcrumb bg-success">
  <li class="breadcrumb-item text-dark">Converting : &nbsp;&nbsp;&nbsp;&nbsp; Last date loaded : 30 March 2018</li>
  <li class="breadcrumb-item text-dark">Polling...</li>
</ol>
<ol class="breadcrumb bg-warning" id="breadcrumb2">
  <li class="breadcrumb-item text-dark">Validating : &nbsp;&nbsp;&nbsp;&nbsp; Last date loaded : 29 March 2018</li>  
  <li class="breadcrumb-item text-dark">Manual : Inactive</li>        
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
        <a class="nav-link active" data-toggle="tab" href="#home" role="tab" aria-controls="home">Survey : Singtel Cencus</a>
      </li>      
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" id="home" role="tabpanel">        
        <div id="trans-wrapper"></div>
      </div>      
    </div>
  </div>
</div>
@stop
@section('modals')
<!-- The Modal -->
<div class="modal fade" id="modal-timeframe" style="height : 50%;">
  <div class="modal-dialog modal-md" style="height : calc(100% - 150px);">
    <div class="modal-content" style="height : 100%;">
      <!-- Modal Header -->
      <div class="modal-header bg-primary">
        <h5 class="modal-title">Update</h5>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <!-- Modal body -->
      <div class="modal-body" style="height: 100%;">        
        <div class="form-group">
          <label class="col-md-9 col-form-label" for="warningtime"><strong>Warning time</strong></label>
          <div class="col-md-9">
            <input type="text" class="form-control" id="warningtime">
          </div>
          <label class="col-md-9 col-form-label" for="errortime"><strong>Error time</strong></label>
          <div class="col-md-9">
            <input type="text" class="form-control" id="errortime">
          </div>
        </div>
      </div>
      <!-- Modal footer -->
      <div class="modal-footer bg-light">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
@stop
@section('script')
<script type="text/javascript" src="js/jquery-1.12.4.js"></script>
<script type="text/javascript" src="js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="js/dataTables.bootstrap4.min.js"></script>
<script type="text/javascript" src="js/jQuery.print.js"></script>
<script type="text/javascript" src="js/jquery.floatThead.min.js"></script>
<script type="text/javascript" src="js/modules.js"></script>
<script type="text/javascript" src="js/dashboard.js"></script>
@stop