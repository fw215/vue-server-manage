<template>
  <aside class="main-sidebar">
    <section class="sidebar" style="height: auto;">
      <div class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat">
              <i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </div>
      <ul class="sidebar-menu tree" data-widget="tree">
        <li class="header">MENU</li>
        <router-link tag="li" to="/" exact-active-class="active"><a><i class="fa fa-dashboard"></i> Dashboard</a></router-link>
        <router-link tag="li" to="/home" exact-active-class="active"><a><i class="fa fa-circle-o"></i> hello</a></router-link>
        <router-link tag="li" to="/dashboard" exact-active-class="active"><a><i class="fa fa-circle-o"></i> dashboard</a></router-link>
        <li class="active treeview menu-open">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <router-link tag="li" to="/" exact-active-class="active"><a><i class="fa fa-circle-o"></i> home</a></router-link>
            <router-link tag="li" to="/home" exact-active-class="active"><a><i class="fa fa-circle-o"></i> hello</a></router-link>
            <router-link tag="li" to="/dashboard" exact-active-class="active"><a><i class="fa fa-circle-o"></i> dashboard</a></router-link>
          </ul>
        </li>
        <li><a href="https://adminlte.io/docs"><i class="fa fa-book"></i> <span>Documentation</span></a></li>
      </ul>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'Aside'
}
</script>
