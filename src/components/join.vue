<template>
    <div class="p-3 mb-2 bg-success text-white">
     <div class="container text-center">
    
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="card  shadow-lg" style="border-radius: 10px; border-left:8px #007bff solid; border-right: none; border-top:none; border-bottom:none"><br>
    <form>
        <p1 class="text-uppercase">JOIN WITH US</p1><br>
        <p1 class="text-uppercase">Let’s Build Better Life For Them</p1><br><br>
    <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" class="form-control" id="exampleInputFirstName" placeholder="First Name">
        
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" class="form-control" id="exampleInputLastName" placeholder="Last Name">
        
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" class="form-control" id="exampleInputPhoneNumber" placeholder="Phone Number">
        
      </div>
    </div>
  </div>
 
  <!-- Message input -->
  <div class="form-outline mb-4">
    <textarea class="form-control" id="form6Example7" rows="4" ></textarea>
    <label class="form-label" for="form6Example7" >Additional information</label>
  </div>
 <!-- Submit button -->
 <a class="btn btn-outline-success " href="#!" role="button" >Join and help them</a><br><br>

</form>
  </div>

 


</div>
</div>


</template>




<style scoped>
p1{
    color: green;
    font-family: "Montserrat";
    font-size: 20px;
    font-weight: bold;
}

form{
    padding: 20px;
}

</style>