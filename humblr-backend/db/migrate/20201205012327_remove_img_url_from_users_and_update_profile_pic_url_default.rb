class RemoveImgUrlFromUsersAndUpdateProfilePicUrlDefault < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :img_url
    change_column :users, :profile_pic_url, :string, default: 'https://static.thenounproject.com/png/1095867-200.png'
  end
end
