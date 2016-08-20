require 'rails-controller-testing'
shared_examples("REST API controller") do
  #cleaner code
  subject(:instance)   {subject.class.name.underscore.to_sym}
  subject(:collection) {subject.class.name.underscore.pluralize.to_sym}
  subject(:assigned)   {assigns(instance)}
  let(:error_message)  {"Couldn't find #{subject.class.name} with id=invalid"}

  #generate models for each test
  subject {@subject}

  before(:each) do
    request.accept = "application/json"
    @object_title_method ||="name"
  end

  describe "GET index" do
    it "returns a list (200)" do
      get :index, @params
      expect(response.status).to eq(200)
      # expect(assigns(collection).to_a).to eq(@index.to_a)
    end
  end

  describe "GET show" do
    it "finds a record (200)" do
      get :show, @params.merge(:id => subject.id)
      expect(response.status).to eq(200)
    end

    it "contains the correct record" do
      get :show, @params.merge(:id => subject.id)
      expect(response.status).to eq(200)

    end
  end

  describe "PUT destroy" do
    it "removes a record (204)" do
      put :destroy, @params.merge!(:id => subject.id)
      expect(response.status).to eq(302)
    end
  end
end
