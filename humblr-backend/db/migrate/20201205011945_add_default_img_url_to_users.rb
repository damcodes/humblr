class AddDefaultImgUrlToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :img_url, :string, default: "https://static.thenounproject.com/png/1095867-200.png"
  end
end
