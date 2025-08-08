
import mapImage from "../../assets/img/map/map.png";

export const MapOne = () => {
  return (
    <div className="td-map-area pt-140">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="td-map-count">
              <h2 className="td-map-count-title">
                <span
                  data-purecounter-duration="1.5"
                  data-purecounter-end="250"
                  className="purecounter"
                >
                  0
                </span>
                +
              </h2>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="td-map-para">
              <p>
                Our focus is on delivering long-term financial value
                to our clients through compliant and goal-driven investment
                strategies. We design sustainable wealth-building solutions
                aligned with your life goals and market realities. From
                strategic planning to portfolio execution, we’re here to ensure
                your financial journey succeeds. Backed by decades of expertise
                in disciplined investing, we think, plan, and invest with your
                future in mind.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="td-map-thumb p-relative">
              <img className="w-100" src={mapImage} alt="map" />
              {/* <span className="td-map-lucation-dot one td-pulse-border"></span>
              <span className="td-map-lucation-dot two td-pulse-border"></span>
              <span className="td-map-lucation-dot three td-pulse-border"></span>
              <span className="td-map-lucation-dot four td-pulse-border"></span>
              <span className="td-map-lucation-dot five td-pulse-border"></span> */}
              <span className="td-map-lucation-dot india td-pulse-border"></span>
              <span className="td-map-lucation-dot us td-pulse-border"></span>
              <span className="td-map-lucation-dot europe td-pulse-border"></span>
              <span className="td-map-lucation-dot australia td-pulse-border"></span>
              <span className="td-map-lucation-dot middle-east td-pulse-border"></span>
              <span className="td-map-lucation-dot singapore td-pulse-border"></span>
              <span className="td-map-lucation-dot malaysia td-pulse-border"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
