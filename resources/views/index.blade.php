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
<div class="modal fade" id="respondent-mod" style="height : 100%;">
  <div class="modal-dialog modal-xl" style="height : calc(100% - 150px);">
    <div class="modal-content" style="height : 100%;">
      <!-- Modal Header -->
      <div class="modal-header bg-danger">
        <h4 class="modal-title">Households Information</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <!-- Modal body -->
      <div class="modal-body" style="height: calc(100% - 200px);">        
        <div class="row" style="height: 100%">
          <div class="col" style="height: 100%">
            <ul class="nav nav-pills mb-1" id="pills-tab" role="tablist">              
              <li class="nav-item">
                <a class="nav-link active" id="pills-respo-tab" data-toggle="pill" href="#pills-respo" role="tab" aria-controls="pills-respo" aria-selected="true">Respondent</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-income-tab" data-toggle="pill" href="#pills-income" role="tab" aria-controls="pills-income" aria-selected="false">Major Income</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-appliances-tab" data-toggle="pill" href="#pills-appliances" role="tab" aria-controls="pills-appliances" aria-selected="false">Appliances</a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent" style="height: calc(100% - 30px)">
              <div class="tab-pane fade show active" id="pills-respo" role="tabpanel" aria-labelledby="pills-respo-tab" style="height: 100%">
                1
              </div>
              <div class="tab-pane fade" id="pills-income" role="tabpanel" aria-labelledby="pills-income-tab" style="height: 100%">
                2
              </div>
              <div class="tab-pane fade" id="pills-appliances" role="tabpanel" aria-labelledby="pills-appliances-tab" style="height: 100%">
                3
              </div>
            </div>
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