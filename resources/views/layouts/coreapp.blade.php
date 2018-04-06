<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>{{ str_replace('-', ' ', config('app.name')) }}</title>

  <!-- Icons -->
  <link href="css/font-awesome.min.css" rel="stylesheet">
  <link href="css/simple-line-icons.css" rel="stylesheet">

  <!-- Main styles for this application -->
  <link href="css/style.css" rel="stylesheet">
  <!-- Styles required by this views -->
  <style>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown:hover .dropdown-content,.dropdown:focus .dropdown-content {
    display: block;
  }
  </style>
  @yield('css')
</head>

<!-- BODY options, add following classes to body to change options

// Header options
1. '.header-fixed'					- Fixed Header

// Brand options
1. '.brand-minimized'       - Minimized brand (Only symbol)

// Sidebar options
1. '.sidebar-fixed'					- Fixed Sidebar
2. '.sidebar-hidden'				- Hidden Sidebar
3. '.sidebar-off-canvas'		- Off Canvas Sidebar
4. '.sidebar-minimized'			- Minimized Sidebar (Only icons)
5. '.sidebar-compact'			  - Compact Sidebar

// Aside options
1. '.aside-menu-fixed'			- Fixed Aside Menu
2. '.aside-menu-hidden'			- Hidden Aside Menu
3. '.aside-menu-off-canvas'	- Off Canvas Aside Menu

// Breadcrumb options
1. '.breadcrumb-fixed'			- Fixed Breadcrumb

// Footer options
1. '.footer-fixed'					- Fixed footer

-->

<body class="app header-fixed breadcrumb-fixed footer-fixed aside-menu-fixed aside-menu-hidden">
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <ul class="nav navbar-nav d-md-down-none">      
      <li class="nav-item px-3">
        <a class="nav-link" href="{{ url('/') }}">Data Validation Dashboard</a>
      </li>      
    </ul>

    <ul class="nav navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <span>Andreas Velter</span>        
      </li>
    </ul>
    <button class="navbar-toggler aside-menu-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>

  <div class="app-body">
    <div class="sidebar">
      <nav class="sidebar-nav">
        @yield('sidebar')        
      </nav>
      <!--<button class="sidebar-minimizer brand-minimizer" type="button"></button>-->
    </div>

    <!-- Main content -->
    <main class="main">
    @yield('breadcrumb')            
      <div class="container-fluid">
        <div class="animated fadeIn">
         @yield('content')
        </div>

      </div>
      <!-- /.conainer-fluid -->
      @yield('modals')
    </main>

    <aside class="aside-menu">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link active text-dark" data-toggle="tab" href="#setup" role="tab"><i class="icon-list"></i> Setup</a>
        </li>        
      </ul>

      <!-- Tab panes -->
      <div class="tab-content">
        <div class="tab-pane p-3 active" id="setup" role="tabpanel">          
          <div class="row">
            <div class="form-group col-sm-12">
              <label class="col-md-9 col-form-label" for="select2">Select Survey Name</label>
              <div class="col-md-9">
                <select id="surveynames" name="surveynames" class="form-control">
                  <option value="">Loading Survey Names...</option>                
                </select>
              </div>
            </div>
            <div class="form-group col-sm-12">
              <div class="col-md-12">
                <div class="table-responsive" id="timeframewrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>

  </div>

  <footer class="app-footer">
    <span></span>
    <span class="ml-auto"><a href="">Techedge Dashboard</a> © 2018.</span>
  </footer>  
  <!-- Bootstrap and necessary plugins -->
  <script src="js/jquery.min.js"></script>
  <script src="js/popper.min.js"></script>  
  <script src="js/bootbox.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/pace.min.js"></script>
  <!-- CoreUI main scripts -->
  <script src="js/coreui.js"></script>
  @yield('script')
</body>
</html>
