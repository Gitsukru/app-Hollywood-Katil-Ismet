export const victimTemplate =  `
<div id="__ID__" data-status="__STATUS__" class="card-body position-relative victim-box my-2 mx-3">
<button class="btn btn-outline-success ml-auto btn-sm victim-mission-completed-btn">Mission
completed <i class="fas fa-check ml-1"></i></button>
<button class="btn btn outline-danger btn-sm ml-auto victim-remove-btn"><i class="far fa-trash-alt"></i></button>
           
<div class="d-flex">
    <div class="victim-img-box mr-auto">
        <img src="__IMG__" width="100" height="100" alt="" data-name="victim-img">
    </div>
    <div class="victim-info-box col ml-3 p-3">
        <div class="row">
            <div class="col-12 pb-3">
                <strong class="mr-2">
                    <span data-name="victim-name">__NAME__</span>
                    <span data-name="victim-lastName">__LASTNAME__</span>
                </strong>
                <span class="badge badge-info mr-2" data-name="victim-gender">__GENDER__</span>
                <span class="badge badge-warning" data-name="victim-age">__AGE__</span>
            </div>
            <div class="col-12">
               __ADDRESS__
            </div>
        </div>
        </div>
    </div>
</div>`;