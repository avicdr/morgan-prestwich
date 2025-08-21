import React from "react";
import NavPagesHeader from "../NavPagesHeader";
import doubleQoutes from "../../static/double_qoutes.svg";
import link from "../../static/link.svg";
import Show from "./Show";
import Footer from "../Footer";
import Navbar from "../Navbar";
import BlogCard from "./BlogCard";

function Insights() {
  return (
    <div>
      <Navbar />
      <NavPagesHeader title="Insights" path="HOME / BLOG" />
      <div className="w-80">
        <Show
          path={"10. 02. 2021. / Sally Forrest / Seminars"}
          heading="The best new marketing that isn't stiff at all."
          img={doubleQoutes}
        />
        <BlogCard
          path={"Sally Forrest / CONTENT"}
          heading={"Process of creating a strong, positive perception"}
          content={`Eget gravida cum sociis natoque penatibus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam. Diam vulputate ut pharetra sit. In dictum non consectetur a erat nam. Pulvinar proin gravida
            hendrerit lectus a. Duis ultricies lacus sed turpis tincidunt. Et molestie ac feugiat sed lectus.`}
          mainContent={`Eget gravida cum sociis natoque penatibus. Scelerisque mauris pellentesque pulvinar pellentesque
            habitant morbi. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Diam vulputate ut
            pharetra sit. In dictum non consectetur a erat nam. Pulvinar proin gravida hendrerit lectus a. Duis
            ultricies lacus sed turpis tincidunt. Et molestie ac feugiat sed lectus. Nulla at volutpat diam ut. Sem
            integer vitae justo eget magna. Imperdiet massa tincidunt nunc pulvinar sapien et. Quam id leo in
            vitae turpis. Elit sed vulputate mi sit amet mauris commodo quis. Est ultricies integer quis auctor elit
            sed vulputate. Turpis tincidunt id aliquet risus feugiat in. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu
            consectetur neque elit quis nunc. Cras elementum pretium est. Nullam ac justo efficitur, tristique
            ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus.
            Nullam elementum nibh nec pellentesque finibus. Suspendisse laoreet velit at eros eleifend, a
            pellentesque urna ornare. In sed viverra dui.\n\nDuis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis
            suscipit, ex odio volutpat sem, vel molestie ligula enim varius est.Duis ultricies mi sed lorem blandit,
            non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel
            molestie ligula enim varius est.Purus in massa tempor nec feugiat nisl pretium fusce. Purus in massa
            tempor nec feugiat nisl pretium fusce. Mollis aliquam ut porttitor leo. Sapien pellentesque habitant
            morbi tristique senectus et netus et malesuada. Dolor sit amet consectetur adipiscing elit duis.
            Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Lorem mollis aliquam ut porttitor leo a.
            Scelerisque purus semper eget duis at tellus. Pharetra vel turpis nunc eget lorem dolor sed. Enim
            diam vulputate ut pharetra sit amet aliquam id diam. Pretium viverra suspendisse potenti nullam ac
            tortor vitae purus faucibus. Facilisi cras fermentum odio eu feugiat. Tristique senectus et netus et
            malesuada fames ac, urpis in eu mi pellentesque habitant morbi tristique senectus et netus et
            malesuada susi amn bibendum.\n\nAt volutpat diam ut venenatis tellus in. A iaculis at erat pellentesque adipiscing commodo. Sapien
            faucibus et molestie ac. Etiam sit amet nisl purus. Est sit amet facilisis magna etiam tempor orci.
            Massa ultricies mi quis hendrerit. Non blandit massa enim nec dui nunc mattis enim. Elementum
            pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Scelerisque eleifend donec
            pretium vulputate sapien nec sagittis. Urna duis convallis convallis tellus id interdum velit laoreet id.
            Vulputate enim nulla aliquet porttitor lacus luctus accumsan.`}
          date={"10. 02. 2021."}
        />
        <Show
          path={"10. 02. 2021. / Sally Forrest / Brand"}
          heading="A world class packaging
          team, built for you."
          img={link}
        />
        <BlogCard
          path={"Sally Forrest / CONTENT"}
          heading={"Process of creating a strong, positive perception"}
          content={`Eget gravida cum sociis natoque penatibus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Erat imperdiet sed
euismod nisi porta lorem mollis aliquam. Diam vulputate ut pharetra sit. In dictum non consectetur a erat nam. Pulvinar proin gravida
hendrerit lectus a. Duis ultricies lacus sed turpis tincidunt. Et molestie ac feugiat sed lectus.`}
          mainContent={`Eget gravida cum sociis natoque penatibus. Scelerisque mauris pellentesque pulvinar pellentesque
habitant morbi. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Diam vulputate ut
pharetra sit. In dictum non consectetur a erat nam. Pulvinar proin gravida hendrerit lectus a. Duis
ultricies lacus sed turpis tincidunt. Et molestie ac feugiat sed lectus. Nulla at volutpat diam ut. Sem
integer vitae justo eget magna. Imperdiet massa tincidunt nunc pulvinar sapien et. Quam id leo in
vitae turpis. Elit sed vulputate mi sit amet mauris commodo quis. Est ultricies integer quis auctor elit
sed vulputate. Turpis tincidunt id aliquet risus feugiat in. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu
consectetur neque elit quis nunc. Cras elementum pretium est. Nullam ac justo efficitur, tristique
ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus.
Nullam elementum nibh nec pellentesque finibus. Suspendisse laoreet velit at eros eleifend, a
pellentesque urna ornare. In sed viverra dui.\n\nDuis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis
suscipit, ex odio volutpat sem, vel molestie ligula enim varius est.Duis ultricies mi sed lorem blandit,
non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel
molestie ligula enim varius est.Purus in massa tempor nec feugiat nisl pretium fusce. Purus in massa
tempor nec feugiat nisl pretium fusce. Mollis aliquam ut porttitor leo. Sapien pellentesque habitant
morbi tristique senectus et netus et malesuada. Dolor sit amet consectetur adipiscing elit duis.
Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Lorem mollis aliquam ut porttitor leo a.
Scelerisque purus semper eget duis at tellus. Pharetra vel turpis nunc eget lorem dolor sed. Enim
diam vulputate ut pharetra sit amet aliquam id diam. Pretium viverra suspendisse potenti nullam ac
tortor vitae purus faucibus. Facilisi cras fermentum odio eu feugiat. Tristique senectus et netus et
malesuada fames ac, urpis in eu mi pellentesque habitant morbi tristique senectus et netus et
malesuada susi amn bibendum.\n\nAt volutpat diam ut venenatis tellus in. A iaculis at erat pellentesque adipiscing commodo. Sapien
faucibus et molestie ac. Etiam sit amet nisl purus. Est sit amet facilisis magna etiam tempor orci.
Massa ultricies mi quis hendrerit. Non blandit massa enim nec dui nunc mattis enim. Elementum
pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Scelerisque eleifend donec
pretium vulputate sapien nec sagittis. Urna duis convallis convallis tellus id interdum velit laoreet id.
Vulputate enim nulla aliquet porttitor lacus luctus accumsan.`}
          date={"10. 02. 2021."}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Insights;
