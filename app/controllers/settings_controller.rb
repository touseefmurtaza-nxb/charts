class SettingsController < ApplicationController

  def edit
    setting = Setting.first
    if setting
      @setting = setting
    end
  end

end
