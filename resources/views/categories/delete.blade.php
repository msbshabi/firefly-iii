@extends('layouts.default')
@section('content')
{!! Breadcrumbs::renderIfExists(Route::getCurrentRoute()->getName(), $category) !!}
{!! Form::open(['class' => 'form-horizontal','id' => 'destroy','url' => route('categories.destroy',$category->id)]) !!}
<div class="row">
    <div class="col-lg-6 col-md-12 col-sm-12">
        <div class="panel panel-red">
            <div class="panel-heading">
                Delete category "{{{$category->name}}}"
            </div>
            <div class="panel-body">
                <p>
                Are you sure that you want to delete category "{{$category->name}}"?
                </p>

                @if($category->transactionjournals()->count() > 0)
                    <p class="text-info">
                        Category "{{{$category->name}}}" still has {{$category->transactionjournals()->count()}} transactions connected
                        to it. These will <strong>not</strong> be removed but will lose their connection to this category.
                    </p>
                @endif

                <p>
                    <button type="submit" class="btn btn-default btn-danger">Delete permanently</button>
                    <a href="{{URL::previous()}}" class="btn-default btn">Cancel</a >
                </p>
            </div>
        </div>
    </div>
</div>


{!! Form::close()!!}
@stop
