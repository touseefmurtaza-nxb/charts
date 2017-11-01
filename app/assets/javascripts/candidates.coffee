# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$('[data-form-prepend]').click (e) ->
  obj = $($(this).attr('data-form-prepend'))
  obj.find('input, select, textarea').each ->
    $(this).attr 'name', ->
      $(this).attr('name').replace 'new_record', (new Date).getTime()
    return
  obj.insertBefore this
  false