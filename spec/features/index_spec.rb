feature 'Index' do
  scenario 'User can view the main page' do
    visit('/')
    expect(page).to have_content('Welcome to the Airport Controller!')
    expect(page).to have_content('Number of planes: 0')
  end

  scenario 'User can land a plane' do
    visit('/')
    click_button('Land Plane')
    expect(page).to have_content('Number of planes: 1')
  end
end
