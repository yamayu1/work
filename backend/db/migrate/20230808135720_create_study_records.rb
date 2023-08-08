class CreateStudyRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :study_records do |t|
      t.integer :user_id
      t.integer :category_id
      t.text :study_content
      t.date :study_day
      t.decimal :study_time, precision: 6, scale: 2

      t.timestamps
    end
  end
end
